<p align="center"><img src="./public/logo.svg" alt="Worldtrip"/></p>


<p align="center"><a href="https://www.youtube.com/watch?v=zqc6MsjHU5c" target="_blank"><img src="https://img.youtube.com/vi/zqc6MsjHU5c/0.jpg"/></a></p>


Uma aplicação que mostra um pouquinho sobre alguns continentes e suas características. Foi utilizado Chakra Ui para a criação da interface e Prismic CMS para criação do conteúdo.


## **Configurações Iniciais**

```
  # clonar o repositório
  git clone https://github.com/nivaldoandrade/worldtrip-reactjs

  # Instalar as dependências dentro da pasta clonada
  yarn

  # Iniciar a aplicação
  yarn dev

```
## **Configurações do Prismic**
1. Criar um repositório na [dashboard;](https://prismic.io/dashboard)   
2. Criar um **Custom Types** do tipo **Repeatable Type** com o nome **continent** com a **build mode**:
```
{
  "Main" : {
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "uuid",
        "placeholder" : "uuid"
      }
    },
    "name" : {
      "type" : "Text",
      "config" : {
        "label" : "name",
        "placeholder" : "name"
      }
    },
    "description" : {
      "type" : "Text",
      "config" : {
        "label" : "description",
        "placeholder" : "description"
      }
    },
    "bannerslider" : {
      "type" : "Image",
      "config" : {
        "constraint" : {
          "width" : 1372,
          "height" : 450
        },
        "thumbnails" : [ ],
        "label" : "bannerSlider"
      }
    },
    "continentpagebanner" : {
      "type" : "Image",
      "config" : {
        "constraint" : {
          "height" : 500
        },
        "thumbnails" : [ ],
        "label" : "continentPageBanner"
      }
    },
    "content" : {
      "type" : "Text",
      "config" : {
        "label" : "content",
        "placeholder" : "content"
      }
    },
    "countries" : {
      "type" : "Number",
      "config" : {
        "label" : "countries",
        "placeholder" : "countries"
      }
    },
    "languages" : {
      "type" : "Number",
      "config" : {
        "label" : "languages",
        "placeholder" : "languages"
      }
    },
    "cities" : {
      "type" : "Number",
      "config" : {
        "label" : "cities",
        "placeholder" : "cities"
      }
    },
    "citiescontent" : {
      "type" : "Group",
      "config" : {
        "fields" : {
          "cityimage" : {
            "type" : "Image",
            "config" : {
              "constraint" : {
                "width" : 254,
                "height" : 173
              },
              "thumbnails" : [ ],
              "label" : "cityImage"
            }
          },
          "countryimage" : {
            "type" : "Image",
            "config" : {
              "constraint" : {
                "width" : 30,
                "height" : 30
              },
              "thumbnails" : [ ],
              "label" : "countryImage"
            }
          },
          "cityname" : {
            "type" : "Text",
            "config" : {
              "label" : "cityName",
              "placeholder" : "cityName"
            }
          },
          "countryname" : {
            "type" : "Text",
            "config" : {
              "label" : "countryName",
              "placeholder" : "countryName"
            }
          }
        },
        "label" : "citiesContent"
      }
    }
  }
}
```

## **Configurações .ENV da aplicação**

### **Primsic**
```
#Prismic
PRISMIC_API_ENDPOINT=
```
**Prismic API Endpoint e Gerar token:** [API & Security.](https://spacetraveling-7.prismic.io/settings/apps/)


## Tecnologias

- ReactJS;
- Next.js;
- Typescript;
- Prismic;
- Chakra UI;
- React icons;
- Swiper.


**Um pequeno aprendiz nesse grande mundo da programação.** 😃🗺

