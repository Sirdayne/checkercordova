<template>
    <v-tabs
            dark
            color="indigo"
            show-arrows
    >
        <v-tabs-slider color="white"></v-tabs-slider>

        <v-tab
                v-for="(item, index) in checkboxes"
                :key="index"
                :href="'#tab-' + index"
        >
            {{ index }}
        </v-tab>

        <v-dialog
                v-model="dialog"
                width="500"
        >
            <template v-slot:activator="{ on }">
                <v-btn
                        color="blue"
                        dark
                        v-on="on"
                >
                    Сохранить
                </v-btn>
            </template>

            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                >
                    Заполните имя
                </v-card-title>

                <v-card-text>
                    <v-text-field
                        label="ФИО: "
                        v-model="outputName"
                    ></v-text-field>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="saveAnswers">Сохранить</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-tabs-items>
            <v-tab-item
                    v-for="(item, index) in checkboxes"
                    :key="index"
                    :value="'tab-' + index"
            >
                <v-card flat>
                    <v-card-text>
                        <p class="checkbox-question">{{ item.question }}</p>
                        <v-container fluid>
                            <v-radio-group v-model="item.checked" :mandatory="false">
                                <v-radio v-for="(answer, secondIndex) in item.answers" :key="secondIndex"
                                         :label="answer" :value="answer"></v-radio>
                            </v-radio-group>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-tabs>
</template>

<script>
  import _ from 'lodash'
  import pdfMake from 'pdfmake/build/pdfmake'
  import pdfFonts from 'pdfmake/build/vfs_fonts'
  import moment from 'moment'

  export default {
    props: ['checklist'],
    data() {
      return {
        outputName: '',
        outputDate: '',
        checkboxes: [],
        dialog: false
      }
    },
    created() {
      this.checkboxes = _.cloneDeep(this.checklist)
    },
    methods: {
      saveAnswers() {
        pdfMake.vfs = pdfFonts.pdfMake.vfs
        let output = []
        let element = []
        this.checkboxes.forEach((checkbox, index) => {
          element = checkbox.checked ? [`${index}) ${checkbox.question}`, checkbox.checked] : [`${index}) ${checkbox.question}`, 'Нет ответа']
          output.push(element)
        })
        this.outputDate = moment().format('DD/MM/YYYY hh:mm:ss');
        let docDefinition = {
          content: [
            {text: 'Чек-лист Безопасное вождение ', style: 'header'},
            {text: 'Автор: ', style: 'subheader'}, this.outputName,
            {text: 'Дата: ', style: 'subheader'}, this.outputDate,
            {
              style: 'tableExample',
              table: {
                body: output
              }
            },
          ],
          styles: {
            header: {
              fontSize: 16,
              bold: true,
              margin: [0, 0, 0, 10]
            },
            subheader: {
              fontSize: 14,
              bold: true,
              margin: [0, 10, 0, 5]
            },
            tableExample: {
              margin: [0, 5, 0, 15]
            },
            tableHeader: {
              bold: true,
              fontSize: 13,
              color: 'black'
            }
          }
        }
        pdfMake.createPdf(docDefinition).download('чек-лист-безопасное-вождение.pdf')
        this.nullForm()
      },
      nullForm() {
        this.outputName = ''
        this.outputDate = ''
        this.dialog = false
      }
    }
  }
</script>

<style lang="stylus">
    .checkbox-question
        font-size 16px
        margin 0
</style>
