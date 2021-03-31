/* eslint-disable no-unused-vars */
import { resolve } from "core-js/features/promise";

export class Place {
  static details(place_id) {
    return new Promise((resolve) => {
      resolve({
        name: "Palato Farol",
        photos: [
          {
            height: 734,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/111534117311052468946">Tynne Barros</a>',
            ],
            photo_reference:
              "ATtYBwLAQOwOaaxjRRw4dAhgvSOssCYDeFaMu_3ECakJZF9VlzLKS9fBFBIQL-2lE1bvFyIMnU0vWCHYOynkLp1-eDU5OaAyauT-pl5_sobMJO3getaA4TrIeedsnF9aNNNiJnR8-aXgWxkMMkBAn9s6BaappmVfmN8kF9-lXW0gohpKQ11-",
            width: 775,
          },
          {
            height: 312,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/117884123516823541567">Palato Farol</a>',
            ],
            photo_reference:
              "ATtYBwL3VOBA06A3Ro3GfDp44R4Xn1KJvgu0lWbGQpy5YcxK78eqDbptYDt0lgqF37yzl3E3sjq0xu0pCE81xUmZCNkqf-43ZP3W9fBz-yv4tVzxSddjsvzgtQGT3VAEVIL76yEOV-YZlVr5YZ7aSC515r5z7D9b796qFVvXw3S-RnRR3AiN",
            width: 820,
          },
          {
            height: 3120,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/110152978584463662590">Gustavo Tenorio</a>',
            ],
            photo_reference:
              "ATtYBwJ-9QxILDaIVA9RLOBLSQkkPALg0XcSKkS2AyIO27qsWs22H0kUF_nPj91H8n8ZiiuMDnyzNf_g_Nu5KBf6V7DRZ5DLEaV-hTpSUKJkn_fOPf8bIZtHwJuLdvk9BKev-JQ2-RybYGGeNRNmFtwrFE123DSaelSPRbjW-kRwLbS2Hz6z",
            width: 4160,
          },
          {
            height: 1836,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/110152978584463662590">Gustavo Tenorio</a>',
            ],
            photo_reference:
              "ATtYBwINRiPBacy41YCVtM9btLN9Sw-pZhOob02AHyJXmQD4i_7inCGEHkPzDinrNblk5xNI_nW2p-ypSGvA_F2ol_ZUDcu3vrRTowzmiROygYwctQoGLsklikV4pGGCWcJqRiKohU88DrWhklT2i9Yvs7AvsQiZN7D9VhdbLkcw7NQxQkCV",
            width: 3264,
          },
          {
            height: 2592,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/102619461773905265299">Hércules P. da Silva</a>',
            ],
            photo_reference:
              "ATtYBwJHs8KwUqHDTTnDkqwWf1usuKpzMraC9g5TyvyYkmCdMNDOj-gnZCXmZAOwXSwjLC5tAccVsiw283tSwgnBvSYUgQW7Szw9Zdb9iy7WSzqBIgeMtetlEJJziYzgaM3bejDlY5TDqdPQ66HGH8VzDddWCO-dVXbbxn2eF_vq3pL4dyGr",
            width: 4608,
          },
          {
            height: 1080,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/105603296834780199303">Jonathas Maresia</a>',
            ],
            photo_reference:
              "ATtYBwKJeuOquTX8rE3QnUK6y3kAUSGx3OBaw4-Qcr7Cgf3lpkIhlytwZ2ekkB0GX48K0kziZAYoQf-zocdBdMWme_ovDLQuiKaI7-_SNiaA3nAl_QIbxVNd7XMuTF0CiF5Ij54lMplRsoktHhxDLdtB1SM9-GfpmLDkGO0sgcx7rzewhePH",
            width: 1920,
          },
          {
            height: 2160,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/114615308055187771938">Kleber Porciuncula</a>',
            ],
            photo_reference:
              "ATtYBwKBFwQx8DYgAWhNFwp9amTWccBtXPwO0Q8SvbICpUVLUlzjiM9XNEKZJ40uSYLeKgaUpLrv00VnhgIoCg9q8RH4erKIEzresQE86lzoIm8JqK2trJlZCvcIMHMWTkdpZf49nY7K-2JNipx-1urHKp-3hh_j3BiuLnkyxDgClHxI3Spr",
            width: 2880,
          },
          {
            height: 4032,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/113734017948589297800">Marcos Nazareno</a>',
            ],
            photo_reference:
              "ATtYBwKcShNKVQwxUwj_BdCIY9pyAG4mPXZBQ_4fxCCRqAbzrUiLxyLMB4cKynoHgjxsebLazenGYm4pb-EMSo_UJBClQsT9hrLI8Z7haTCQ_yCIn2T6JKHU65ayNMbdB7S1wOC7WoAtvaIoAtWthIrVGSxxM1S8WGf_n4LzcUf7yHmMQWL3",
            width: 3024,
          },
          {
            height: 4128,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/110246654565024722337">João Medeiros</a>',
            ],
            photo_reference:
              "ATtYBwJHySE1jOPBDNQuXlZj7WfZ0BD6lKN-b8-gxTFC9IS3S3u-jfGDgrwIGaFwQiKLgtGbSzZAvsG0QJMy2HwXR9EgOsMKT0XZJzgdtQ1YsxKuhSiPstfgjWwhv4YLmvN-ZLPvI79wXQlTrYjBIjJ_8ZLhXoXT6NY7Q5Dmdo7vn4hSTGwd",
            width: 2322,
          },
          {
            height: 3456,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/115992480553263514174">Raquel Lacerda</a>',
            ],
            photo_reference:
              "ATtYBwK6QyAb-_QTZTkMt3wSW1RjEuOGs0epmcVAOYMQ1CXYALEmsL-9IhzdZpyVDuZlILbNcRkL5XImIWG4JUVdXrQYNn0NpGrpN0hSWcV1UatR99jJdOB9UibEQUEKL1kWZvFFu1mHgG3jRf81UD8REgiR_YnZBFo8dxc1lBPPGF6XtCoV",
            width: 4608,
          },
        ],
        rating: 4.7,
        reviews: [
          {
            author_name: "Maria Luiza",
            author_url:
              "https://www.google.com/maps/contrib/116072398192359668260/reviews",
            language: "pt",
            profile_photo_url:
              "https://lh6.googleusercontent.com/-Um9IE4xF8Jg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclpnEosdxZcPpFp3whqdVR9QtPTqQ/s128-c0x00000000-cc-rp-mo/photo.jpg",
            rating: 5,
            relative_time_description: "6 meses atrás",
            text:
              "Excelencia em todos os sentos,atendimento/qualidade/higiene e variedades",
            time: 1600354132,
          },
          {
            author_name: "N. Muniz",
            author_url:
              "https://www.google.com/maps/contrib/109086544593821753975/reviews",
            language: "pt",
            profile_photo_url:
              "https://lh6.googleusercontent.com/-0oFYyaGfn_A/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucliC_Mn20h9Fq1oXckD1U2BGhPxnQ/s128-c0x00000000-cc-rp-mo-ba5/photo.jpg",
            rating: 5,
            relative_time_description: "6 meses atrás",
            text:
              "Qualidade é boa, mas os preços de alguns produtos são salgados!",
            time: 1600026402,
          },
          {
            author_name: "Joselita Santos",
            author_url:
              "https://www.google.com/maps/contrib/107340146472119006156/reviews",
            language: "pt",
            profile_photo_url:
              "https://lh3.googleusercontent.com/a-/AOh14GgDRtvsRSOO9qaxsoShgmk5z19BH18597dcLB1oEek=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            relative_time_description: "6 meses atrás",
            text:
              "Local de grande variedade de alimentos, nacionais e importados.",
            time: 1600198210,
          },
          {
            author_name: "Guga Luz",
            author_url:
              "https://www.google.com/maps/contrib/110641217543275148474/reviews",
            language: "pt",
            profile_photo_url:
              "https://lh3.googleusercontent.com/a-/AOh14GjgpORZmXE6ecKC6cGKbt4Kz4KT_XREk1ULPlVE9Q=s128-c0x00000000-cc-rp-mo",
            rating: 3,
            relative_time_description: "6 meses atrás",
            text:
              "Muito organizado, porém muito caro em relação com outros supermercados.",
            time: 1599585310,
          },
          {
            author_name: "Nogueira Alves",
            author_url:
              "https://www.google.com/maps/contrib/109047357602402656431/reviews",
            language: "pt",
            profile_photo_url:
              "https://lh3.googleusercontent.com/a-/AOh14Gj4x7n__DD9XHmHgYLhyQvTGChA7xXe3Dg8vnzy=s128-c0x00000000-cc-rp-mo-ba3",
            rating: 4,
            relative_time_description: "6 meses atrás",
            text: "Aqui tem qualidade. Pense num lugar bom!",
            time: 1599229152,
          },
        ],
      });
    });
  }

  static review(place_id, review) {
    return new Promise((resolve) => {
      resolve({
        place_id,
        author_name: review.author_name,
        relative_time_description: "Segundos atrás",
        text: review.text,
      });
    });
  }

  static rating(place_id, rating) {
    return new Promise((resolve) => {
      resolve({ place_id, rating });
    });
  }
}
