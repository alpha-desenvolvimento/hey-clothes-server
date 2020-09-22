"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("products", [
      {
        name: "Blusa Preta Aplicações",
        category: 1,
        price: 87.0,
        brand: "Moda Harmônicos",
        description:
          "- Modelagem reta<br />- Decote canoa<br />- Tecido com elastano<br />- 100% viscose",
        quantity: 4,
        provider: 2,
        createdBy: 4,
        imgA:
          "https://assets.troc.com.br/product-store/251744/large-17092020113028662.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/251744/large-17092020113030522.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Elástico Rosa",
        category: 1,
        price: 20.0,
        brand: "Roupas Contemporâneas",
        description:
          "Tamanho: GG<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 251518<br />Como medimos?<br />- Modelagem ampla<br />- Decote canoa<br />- Tecido com elasticidade<br />- 100% poliéster<br /><br />Largura 65cm<br />Comprimento 77cm<br />",
        quantity: 64,
        provider: 15,
        createdBy: 1,
        imgA:
          "https://assets.troc.com.br/product-store/138602/large-11042019175235805.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/138602/large-11042019175239483.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/138602/large-11042019175243764.jpg",
        imgD:
          "https://assets.troc.com.br/product-store/138602/large-11042019175250192.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Preta Rendado",
        category: 1,
        price: 102.0,
        brand: "Roupas Irresistível",
        description:
          "manho: 36<br />Cores: Off-white<br />Condição: Usado e em perfeitas condições<br />ID: 191413<br />Como medimos?<br />- Modelagem sino<br />- Decote redondo<br />- Manga bufante<br /><br />Tecido sem elasticidade<br /><br />Busto 84cm<br />Cintura 80cm<br />Manga 60cm<br />Comprimento 55cm",
        quantity: 23,
        provider: 14,
        createdBy: 2,
        imgA:
          "https://assets.troc.com.br/product-store/223275/large-04032020183311114.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/223275/large-04032020183313125.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/223275/large-04032020183315210.jpg",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Azul Aplicação",
        category: 2,
        price: 61.0,
        brand: "Autênticos Roupas",
        description:
          "- Modelagem reta<br />- Decote arredondado<br />- Sem forro<br />- Elástico na barra<br /><br />Tecido com elasticidade<br /><br />Busto 101cm<br />Cintura 104cm<br />Comprimento 50cm",
        quantity: 25,
        provider: 2,
        createdBy: 5,
        imgA:
          "https://assets.troc.com.br/product-store/186153/large-04102019174417482.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/186153/large-04102019174417385.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/186153/large-04102019174418480.jpg",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Lisa Azul",
        category: 2,
        price: 90.0,
        brand: "Moda Invicto",
        description:
          "Tamanho: PP<br />Cores: Azul marinho<br />Condição: Usado<br />ID: 200376<br />Como medimos?<br />- Modelagem reta<br />- Decote arredondado<br />- Abertura no decote<br />- Tule na manga<br /><br />Tecido com elasticidade<br /><br />Manga 63cm<br />Busto 104cm<br />Cintura 88cm<br />Comprimento 59cm",
        quantity: 67,
        provider: 16,
        createdBy: 3,
        imgA:
          "https://assets.troc.com.br/product-store/200376/large-12112019185553807.JPG",
        imgB:
          "https://assets.troc.com.br/product-store/200376/large-12112019185554516.JPG",
        imgC:
          "https://assets.troc.com.br/product-store/200376/large-12112019185556912.JPG",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Gola Navy",
        category: 2,
        price: 135.0,
        brand: "Moda Invicta",
        description:
          "Tamanho: GG<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 251518<br />Como medimos?<br />- Modelagem ampla<br />- Decote canoa<br />- Tecido com elasticidade<br />- 100% poliéster<br /><br />Largura 65cm<br />Comprimento 77cm<br />",
        quantity: 4,
        provider: 15,
        createdBy: 4,
        imgA:
          "https://assets.troc.com.br/product-store/98252/large-16112018132126931.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/98252/large-16112018132126966.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/98252/large-16112018132126203.jpg",
        imgD:
          "https://assets.troc.com.br/product-store/98252/large-16112018132127339.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Off-White Recortes",
        category: 2,
        price: 122.0,
        brand: "Intensivo Moda",
        description:
          "Tamanho: GG<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 251518<br />Como medimos?<br />- Modelagem ampla<br />- Decote canoa<br />- Tecido com elasticidade<br />- 100% poliéster<br /><br />Largura 65cm<br />Comprimento 77cm<br />",
        quantity: 43,
        provider: 8,
        createdBy: 4,
        imgA:
          "https://assets.troc.com.br/product-store/191413/large-19112019191227804.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/191413/large-19112019191229533.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/191413/large-1911201919123074.jpg",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bata Estampada Color",
        category: 3,
        price: 45.0,
        brand: "Roupas Elegância",
        description:
          "Tamanho: PP<br />Cores: Azul marinho<br />Condição: Usado<br />ID: 200376<br />Como medimos?<br />- Modelagem reta<br />- Decote arredondado<br />- Abertura no decote<br />- Tule na manga<br /><br />Tecido com elasticidade<br /><br />Manga 63cm<br />Busto 104cm<br />Cintura 88cm<br />Comprimento 59cm",
        quantity: 31,
        provider: 15,
        createdBy: 4,
        imgA:
          "https://assets.troc.com.br/product-store/251518/large-18092020105608560.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/251518/large-18092020105610779.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bata Estampada Azul",
        category: 3,
        price: 107.0,
        brand: "Audaciosos Roupas",
        description:
          "- Modelagem reta<br />- Decote em V<br />- Transparência<br /><br />Tecido sem elasticidade<br /><br />Busto 94cm<br />Cintura 104cm<br />Comprimento 58cm",
        quantity: 67,
        provider: 16,
        createdBy: 1,
        imgA:
          "https://assets.troc.com.br/product-store/251513/large-18092020105528374.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/251513/large-18092020105531833.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bata Bordada Estampa",
        category: 3,
        price: 65.0,
        brand: "Libertária Moda",
        description:
          "Tamanho: P<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 6784<br />Como medimos?<br />Bata com estampa tribal. Possui detalhe bordado com pedraria no decote.<br /><br />Ombro 40 cm<br />Busto 94 cm<br />Comprimento 85 cm<br />Manga 36 cm<br />",
        quantity: 41,
        provider: 2,
        createdBy: 3,
        imgA:
          "https://assets.troc.com.br/product-store/6784/large-28082020121028945.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/6784/large-28082020121028173.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bata Morcego Amarração",
        category: 3,
        price: 29.0,
        brand: "Sensacional Moda",
        description:
          "- Modelagem reta<br />- Decote canoa<br />- Tecido com elastano<br />- 100% viscose",
        quantity: 27,
        provider: 6,
        createdBy: 1,
        imgA:
          "https://assets.troc.com.br/product-store/32864/large-15012018164904611.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/32864/large-15012018164905694.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/32864/large-15012018164905790.jpg",
        imgD:
          "https://assets.troc.com.br/product-store/32864/large-15012018164905122.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bata Listra Amarela",
        category: 3,
        price: 13.0,
        brand: "Roupas Fabulosas",
        description:
          "Tamanho: GG<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 251518<br />Como medimos?<br />- Modelagem ampla<br />- Decote canoa<br />- Tecido com elasticidade<br />- 100% poliéster<br /><br />Largura 65cm<br />Comprimento 77cm<br />",
        quantity: 84,
        provider: 4,
        createdBy: 5,
        imgA:
          "https://assets.troc.com.br/product-store/232947/large-20032020094937685.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/232947/large-20032020094938944.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/232947/large-20032020094940192.jpg",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "DOCE DE COCO Blusa Tricot Vermelha",
        category: 4,
        price: 18.0,
        brand: "Audaciosos Roupas",
        description:
          "Tamanho: PP<br />Cores: Azul marinho<br />Condição: Usado<br />ID: 200376<br />Como medimos?<br />- Modelagem reta<br />- Decote arredondado<br />- Abertura no decote<br />- Tule na manga<br /><br />Tecido com elasticidade<br /><br />Manga 63cm<br />Busto 104cm<br />Cintura 88cm<br />Comprimento 59cm",
        quantity: 69,
        provider: 10,
        createdBy: 4,
        imgA:
          "https://assets.troc.com.br/product-store/252263/large-18092020191453677.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/252263/large-1809202019145593.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Preta Estampada",
        category: 4,
        price: 91.0,
        brand: "Moda Magníficas",
        description:
          "Tamanho: GG<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 251518<br />Como medimos?<br />- Modelagem ampla<br />- Decote canoa<br />- Tecido com elasticidade<br />- 100% poliéster<br /><br />Largura 65cm<br />Comprimento 77cm<br />",
        quantity: 75,
        provider: 3,
        createdBy: 5,
        imgA:
          "https://assets.troc.com.br/product-store/250759/large-18092020105604578.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/250759/large-18092020105605377.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Sobreposição Floral",
        category: 4,
        price: 135.0,
        brand: "Moda Anacrônica",
        description:
          "manho: 36<br />Cores: Off-white<br />Condição: Usado e em perfeitas condições<br />ID: 191413<br />Como medimos?<br />- Modelagem sino<br />- Decote redondo<br />- Manga bufante<br /><br />Tecido sem elasticidade<br /><br />Busto 84cm<br />Cintura 80cm<br />Manga 60cm<br />Comprimento 55cm",
        quantity: 91,
        provider: 4,
        createdBy: 5,
        imgA:
          "https://assets.troc.com.br/product-store/250758/large-18092020105611892.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/250758/large-18092020105613867.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/250758/large-18092020105614517.jpg",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Body Renda Bicolor",
        category: 5,
        price: 56.0,
        brand: "Irresistíveis Roupas",
        description:
          "- Modelagem reta<br />- Decote canoa<br />- Tecido com elastano<br />- 100% viscose",
        quantity: 57,
        provider: 3,
        createdBy: 2,
        imgA:
          "https://assets.troc.com.br/product-store/57464/large-25052018185455943.jpg",
        imgB: "",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Body Lurex Listrado",
        category: 5,
        price: 77.0,
        brand: "Apropriados Moda",
        description:
          "- Modelagem reta<br />- Decote canoa<br />- Tecido com elastano<br />- 100% viscose",
        quantity: 94,
        provider: 15,
        createdBy: 5,
        imgA:
          "https://assets.troc.com.br/product-store/252277/large-18092020191501154.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/252277/large-18092020191503378.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Body Preto Poá",
        category: 5,
        price: 24.0,
        brand: "Roupas Atraentes",
        description:
          "manho: 36<br />Cores: Off-white<br />Condição: Usado e em perfeitas condições<br />ID: 191413<br />Como medimos?<br />- Modelagem sino<br />- Decote redondo<br />- Manga bufante<br /><br />Tecido sem elasticidade<br /><br />Busto 84cm<br />Cintura 80cm<br />Manga 60cm<br />Comprimento 55cm",
        quantity: 26,
        provider: 6,
        createdBy: 5,
        imgA:
          "https://assets.troc.com.br/product-store/245392/large-16092020120457922.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/245392/large-16092020120456802.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Crooped Preta Fio",
        category: 6,
        price: 47.0,
        brand: "Roupas Singulares",
        description:
          "- Modelagem reta<br />- Decote arredondado<br />- Sem forro<br />- Elástico na barra<br /><br />Tecido com elasticidade<br /><br />Busto 101cm<br />Cintura 104cm<br />Comprimento 50cm",
        quantity: 99,
        provider: 13,
        createdBy: 2,
        imgA:
          "https://assets.troc.com.br/product-store/250119/large-05092020030324569.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/250119/large-05092020030326257.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Listrada Seda",
        category: 6,
        price: 57.0,
        brand: "Ótimo Moda",
        description:
          "- Modelagem reta<br />- Decote canoa<br />- Tecido com elastano<br />- 100% viscose",
        quantity: 28,
        provider: 9,
        createdBy: 3,
        imgA:
          "https://assets.troc.com.br/product-store/247591/large-01092020115434217.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/247591/large-01092020115436469.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/247591/large-01092020115437327.jpg",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Seda Transpasse",
        category: 6,
        price: 77.0,
        brand: "Moda Anacrônica",
        description:
          "Tamanho: P<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 6784<br />Como medimos?<br />Bata com estampa tribal. Possui detalhe bordado com pedraria no decote.<br /><br />Ombro 40 cm<br />Busto 94 cm<br />Comprimento 85 cm<br />Manga 36 cm<br />",
        quantity: 46,
        provider: 5,
        createdBy: 2,
        imgA:
          "https://assets.troc.com.br/product-store/242142/large-02082020110024442.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/242142/large-02082020110025154.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Moletom Marrom Estampa",
        category: 7,
        price: 72.0,
        brand: "Irresistíveis Roupas",
        description:
          "Tamanho: PP<br />Cores: Azul marinho<br />Condição: Usado<br />ID: 200376<br />Como medimos?<br />- Modelagem reta<br />- Decote arredondado<br />- Abertura no decote<br />- Tule na manga<br /><br />Tecido com elasticidade<br /><br />Manga 63cm<br />Busto 104cm<br />Cintura 88cm<br />Comprimento 59cm",
        quantity: 5,
        provider: 10,
        createdBy: 4,
        imgA:
          "https://assets.troc.com.br/product-store/251610/large-18092020191741476.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/251610/large-18092020191743614.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Animal Print",
        category: 7,
        price: 38.0,
        brand: "Roupas Fantástico",
        description:
          "- Modelagem reta<br />- Decote em V<br />- Bolsos<br />- Transparência<br /><br />Tecido sem elasticidade<br /><br />Busto 82cm<br />Cintura 86cm<br />Manga 59cm<br />Comprimento 64cm",
        quantity: 33,
        provider: 4,
        createdBy: 2,
        imgA:
          "https://assets.troc.com.br/product-store/251454/large-18092020105520782.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/251454/large-18092020105521876.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Seda Lisa",
        category: 7,
        price: 14.0,
        brand: "Autênticos Moda",
        description:
          "- Modelagem reta<br />- Decote canoa<br />- Tecido com elastano<br />- 100% viscose",
        quantity: 26,
        provider: 13,
        createdBy: 5,
        imgA:
          "https://assets.troc.com.br/product-store/249893/large-17092020113132338.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/249893/large-17092020113134976.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Preta Bordado",
        category: 8,
        price: 118.0,
        brand: "Chique Roupas",
        description:
          "- Modelagem reta<br />- Decote arredondado<br />- Sem forro<br />- Elástico na barra<br /><br />Tecido com elasticidade<br /><br />Busto 101cm<br />Cintura 104cm<br />Comprimento 50cm",
        quantity: 66,
        provider: 3,
        createdBy: 5,
        imgA:
          "https://assets.troc.com.br/product-store/237739/large-10062020223310435.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/237739/large-10062020223312308.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Azul Estrela",
        category: 8,
        price: 100.0,
        brand: "Moda Patriotas",
        description:
          "manho: 36<br />Cores: Off-white<br />Condição: Usado e em perfeitas condições<br />ID: 191413<br />Como medimos?<br />- Modelagem sino<br />- Decote redondo<br />- Manga bufante<br /><br />Tecido sem elasticidade<br /><br />Busto 84cm<br />Cintura 80cm<br />Manga 60cm<br />Comprimento 55cm",
        quantity: 31,
        provider: 10,
        createdBy: 4,
        imgA:
          "https://assets.troc.com.br/product-store/245621/large-13082020111855794.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/245621/large-13082020111856632.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Moletom Estampa",
        category: 8,
        price: 74.0,
        brand: "Moda Doces",
        description:
          "manho: 36<br />Cores: Off-white<br />Condição: Usado e em perfeitas condições<br />ID: 191413<br />Como medimos?<br />- Modelagem sino<br />- Decote redondo<br />- Manga bufante<br /><br />Tecido sem elasticidade<br /><br />Busto 84cm<br />Cintura 80cm<br />Manga 60cm<br />Comprimento 55cm",
        quantity: 82,
        provider: 14,
        createdBy: 2,
        imgA:
          "https://assets.troc.com.br/product-store/229347/large-13032020173015457.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/229347/large-13032020173017874.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/229347/large-13032020173018426.jpg",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cropped Vermelho Fio",
        category: 9,
        price: 70.0,
        brand: "Moda Doces",
        description:
          "- Modelagem reta<br />- Decote em V<br />- Bolsos<br />- Transparência<br /><br />Tecido sem elasticidade<br /><br />Busto 82cm<br />Cintura 86cm<br />Manga 59cm<br />Comprimento 64cm",
        quantity: 77,
        provider: 12,
        createdBy: 1,
        imgA:
          "https://assets.troc.com.br/product-store/245495/large-1308202011263260.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/245495/large-13082020112631138.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Vichy Amarela",
        category: 9,
        price: 85.0,
        brand: "Faceiras Roupas",
        description:
          "Tamanho: GG<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 251518<br />Como medimos?<br />- Modelagem ampla<br />- Decote canoa<br />- Tecido com elasticidade<br />- 100% poliéster<br /><br />Largura 65cm<br />Comprimento 77cm<br />",
        quantity: 59,
        provider: 1,
        createdBy: 4,
        imgA:
          "https://assets.troc.com.br/product-store/249277/large-05092020033443598.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/249277/large-05092020033444660.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Regata Coral Canelado",
        category: 10,
        price: 67.0,
        brand: "Moda Ancestrais",
        description:
          "Tamanho: P<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 6784<br />Como medimos?<br />Bata com estampa tribal. Possui detalhe bordado com pedraria no decote.<br /><br />Ombro 40 cm<br />Busto 94 cm<br />Comprimento 85 cm<br />Manga 36 cm<br />",
        quantity: 59,
        provider: 16,
        createdBy: 5,
        imgA:
          "https://assets.troc.com.br/product-store/250931/large-21092020100742949.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/250931/large-21092020100743889.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Navy Estampa",
        category: 10,
        price: 8.0,
        brand: "Roupas Singulares",
        description:
          "Tamanho: GG<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 251518<br />Como medimos?<br />- Modelagem ampla<br />- Decote canoa<br />- Tecido com elasticidade<br />- 100% poliéster<br /><br />Largura 65cm<br />Comprimento 77cm<br />",
        quantity: 61,
        provider: 16,
        createdBy: 4,
        imgA:
          "https://assets.troc.com.br/product-store/251497/large-21092020100659963.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/251497/large-21092020100700448.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Regata Off Estampa",
        category: 11,
        price: 67.0,
        brand: "Fortificantes Moda",
        description:
          "Tamanho: GG<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 251518<br />Como medimos?<br />- Modelagem ampla<br />- Decote canoa<br />- Tecido com elasticidade<br />- 100% poliéster<br /><br />Largura 65cm<br />Comprimento 77cm<br />",
        quantity: 58,
        provider: 7,
        createdBy: 1,
        imgA:
          "https://assets.troc.com.br/product-store/250928/large-21092020100812445.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/250928/large-21092020100813984.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camisa Cropped Verde",
        category: 11,
        price: 75.0,
        brand: "Roupas Estonteante",
        description:
          "- Modelagem reta<br />- Decote em V<br />- Transparência<br /><br />Tecido sem elasticidade<br /><br />Busto 94cm<br />Cintura 104cm<br />Comprimento 58cm",
        quantity: 44,
        provider: 6,
        createdBy: 4,
        imgA:
          "https://assets.troc.com.br/product-store/245397/large-07082020084914598.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/245397/large-070820200849157.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camisa Amarração Branca",
        category: 12,
        price: 14.0,
        brand: "Moda Anacrônica",
        description:
          "- Modelagem reta<br />- Decote canoa<br />- Tecido com elastano<br />- 100% viscose",
        quantity: 58,
        provider: 16,
        createdBy: 2,
        imgA:
          "https://assets.troc.com.br/product-store/72410/large-14092018122859301.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/72410/large-1409201812285970.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/72410/large-14092018122859974.jpg",
        imgD:
          "https://assets.troc.com.br/product-store/72410/large-14092018122859152.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camisa Azul Seda",
        category: 12,
        price: 7.0,
        brand: "Delicada Roupas",
        description:
          "Tamanho: P<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 6784<br />Como medimos?<br />Bata com estampa tribal. Possui detalhe bordado com pedraria no decote.<br /><br />Ombro 40 cm<br />Busto 94 cm<br />Comprimento 85 cm<br />Manga 36 cm<br />",
        quantity: 51,
        provider: 12,
        createdBy: 1,
        imgA:
          "https://assets.troc.com.br/product-store/249901/large-1709202011313656.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/249901/large-17092020113137152.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camisa Xadrez Destroyed",
        category: 13,
        price: 122.0,
        brand: "Irresistíveis Roupas",
        description:
          "- Modelagem reta<br />- Decote arredondado<br />- Sem forro<br />- Elástico na barra<br /><br />Tecido com elasticidade<br /><br />Busto 101cm<br />Cintura 104cm<br />Comprimento 50cm",
        quantity: 68,
        provider: 13,
        createdBy: 2,
        imgA:
          "https://assets.troc.com.br/product-store/251035/large-21092020100813735.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/251035/large-21092020100815927.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camisa Branca Linho",
        category: 13,
        price: 54.0,
        brand: "Autênticos Roupas",
        description:
          "Tamanho: P<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 6784<br />Como medimos?<br />Bata com estampa tribal. Possui detalhe bordado com pedraria no decote.<br /><br />Ombro 40 cm<br />Busto 94 cm<br />Comprimento 85 cm<br />Manga 36 cm<br />",
        quantity: 17,
        provider: 16,
        createdBy: 3,
        imgA:
          "https://assets.troc.com.br/product-store/251010/large-21092020100541281.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/251010/large-21092020100542254.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camisa Vichy Bordô",
        category: 13,
        price: 62.0,
        brand: "Sensacional Moda",
        description:
          "- Modelagem reta<br />- Decote arredondado<br />- Sem forro<br />- Elástico na barra<br /><br />Tecido com elasticidade<br /><br />Busto 101cm<br />Cintura 104cm<br />Comprimento 50cm",
        quantity: 51,
        provider: 6,
        createdBy: 3,
        imgA:
          "https://assets.troc.com.br/product-store/251563/large-18092020105619548.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/251563/large-18092020105621764.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camisa Seda Cinza",
        category: 13,
        price: 90.0,
        brand: "Ótimo Moda",
        description:
          "- Modelagem reta<br />- Decote canoa<br />- Tecido com elastano<br />- 100% viscose",
        quantity: 36,
        provider: 8,
        createdBy: 5,
        imgA:
          "https://assets.troc.com.br/product-store/241754/large-30072020120059953.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/241754/large-3007202012010163.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camisa Pink Lisa",
        category: 13,
        price: 61.0,
        brand: "Valiosa Moda",
        description:
          "- Modelagem reta<br />- Decote arredondado<br />- Sem forro<br />- Elástico na barra<br /><br />Tecido com elasticidade<br /><br />Busto 101cm<br />Cintura 104cm<br />Comprimento 50cm",
        quantity: 92,
        provider: 11,
        createdBy: 3,
        imgA:
          "https://assets.troc.com.br/product-store/248479/large-11092020212126710.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/248479/large-11092020212127356.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camisa Jeans Renda",
        category: 14,
        price: 76.0,
        brand: "Delicada Roupas",
        description:
          "- Modelagem reta<br />- Decote em V<br />- Transparência<br /><br />Tecido sem elasticidade<br /><br />Busto 94cm<br />Cintura 104cm<br />Comprimento 58cm",
        quantity: 12,
        provider: 2,
        createdBy: 4,
        imgA:
          "https://assets.troc.com.br/product-store/246579/large-26082020115806563.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/246579/large-26082020115807442.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camisa Amarela Lisa",
        category: 14,
        price: 94.0,
        brand: "Irresistíveis Roupas",
        description:
          "Tamanho: P<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 6784<br />Como medimos?<br />Bata com estampa tribal. Possui detalhe bordado com pedraria no decote.<br /><br />Ombro 40 cm<br />Busto 94 cm<br />Comprimento 85 cm<br />Manga 36 cm<br />",
        quantity: 5,
        provider: 10,
        createdBy: 1,
        imgA:
          "https://assets.troc.com.br/product-store/246861/large-24082020115413377.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/246861/large-24082020115414232.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camisa Seda Aplicações",
        category: 15,
        price: 23.0,
        brand: "Delicada Roupas",
        description:
          "Tamanho: PP<br />Cores: Azul marinho<br />Condição: Usado<br />ID: 200376<br />Como medimos?<br />- Modelagem reta<br />- Decote arredondado<br />- Abertura no decote<br />- Tule na manga<br /><br />Tecido com elasticidade<br /><br />Manga 63cm<br />Busto 104cm<br />Cintura 88cm<br />Comprimento 59cm",
        quantity: 81,
        provider: 2,
        createdBy: 1,
        imgA:
          "https://assets.troc.com.br/product-store/233678/large-13072020113650954.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/233678/large-13072020113652901.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Azul Lisa",
        category: 15,
        price: 14.0,
        brand: "Delicada Roupas",
        description:
          "Tamanho: GG<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 251518<br />Como medimos?<br />- Modelagem ampla<br />- Decote canoa<br />- Tecido com elasticidade<br />- 100% poliéster<br /><br />Largura 65cm<br />Comprimento 77cm<br />",
        quantity: 3,
        provider: 5,
        createdBy: 1,
        imgA:
          "https://assets.troc.com.br/product-store/202237/large-25112019185440861.JPG",
        imgB:
          "https://assets.troc.com.br/product-store/202237/large-25112019185441724.JPG",
        imgC:
          "https://assets.troc.com.br/product-store/202237/large-25112019185442573.JPG",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Polo Navy Lisa",
        category: 16,
        price: 118.0,
        brand: "Roupas Estonteante",
        description:
          "Tamanho: PP<br />Cores: Azul marinho<br />Condição: Usado<br />ID: 200376<br />Como medimos?<br />- Modelagem reta<br />- Decote arredondado<br />- Abertura no decote<br />- Tule na manga<br /><br />Tecido com elasticidade<br /><br />Manga 63cm<br />Busto 104cm<br />Cintura 88cm<br />Comprimento 59cm",
        quantity: 32,
        provider: 4,
        createdBy: 5,
        imgA:
          "https://assets.troc.com.br/product-store/246706/large-26082020115752101.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/246706/large-26082020115754993.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/246706/large-26082020115755836.jpg",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Polo Pied Poule P&B",
        category: 16,
        price: 97.0,
        brand: "Impactantes Moda",
        description:
          "- Modelagem reta<br />- Decote em V<br />- Transparência<br /><br />Tecido sem elasticidade<br /><br />Busto 94cm<br />Cintura 104cm<br />Comprimento 58cm",
        quantity: 36,
        provider: 16,
        createdBy: 2,
        imgA:
          "https://assets.troc.com.br/product-store/246645/large-21082020223101604.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/246645/large-21082020223103265.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blusa Polo Manga",
        category: 16,
        price: 131.0,
        brand: "Moda Arrojada",
        description:
          "manho: 36<br />Cores: Off-white<br />Condição: Usado e em perfeitas condições<br />ID: 191413<br />Como medimos?<br />- Modelagem sino<br />- Decote redondo<br />- Manga bufante<br /><br />Tecido sem elasticidade<br /><br />Busto 84cm<br />Cintura 80cm<br />Manga 60cm<br />Comprimento 55cm",
        quantity: 64,
        provider: 15,
        createdBy: 4,
        imgA:
          "https://assets.troc.com.br/product-store/138268/large-29042019172308310.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/138268/large-2904201917231692.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/138268/large-29042019172323389.jpg",
        imgD:
          "https://assets.troc.com.br/product-store/138268/large-2904201917231692.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Polo Bicolor Listrada",
        category: 16,
        price: 127.0,
        brand: "Sublimes Roupas",
        description:
          "Tamanho: GG<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 251518<br />Como medimos?<br />- Modelagem ampla<br />- Decote canoa<br />- Tecido com elasticidade<br />- 100% poliéster<br /><br />Largura 65cm<br />Comprimento 77cm<br />",
        quantity: 29,
        provider: 7,
        createdBy: 5,
        imgA:
          "https://assets.troc.com.br/product-store/226944/large-13032020173337220.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/226944/large-13032020173338916.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/226944/large-13032020173340853.jpg",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camiseta Cinza Bordada",
        category: 17,
        price: 92.0,
        brand: "Faceiras Roupas",
        description:
          "- Modelagem reta<br />- Decote arredondado<br />- Sem forro<br />- Elástico na barra<br /><br />Tecido com elasticidade<br /><br />Busto 101cm<br />Cintura 104cm<br />Comprimento 50cm",
        quantity: 49,
        provider: 2,
        createdBy: 4,
        imgA:
          "https://assets.troc.com.br/product-store/75435/large-21082018134132443.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/75435/large-21082018134132839.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/75435/large-21082018134132101.jpg",
        imgD:
          "https://assets.troc.com.br/product-store/75435/large-21082018134133725.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camiseta Warm Nights",
        category: 17,
        price: 53.0,
        brand: "Roupas Atraentes",
        description:
          "Tamanho: P<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 6784<br />Como medimos?<br />Bata com estampa tribal. Possui detalhe bordado com pedraria no decote.<br /><br />Ombro 40 cm<br />Busto 94 cm<br />Comprimento 85 cm<br />Manga 36 cm<br />",
        quantity: 58,
        provider: 9,
        createdBy: 5,
        imgA:
          "https://assets.troc.com.br/product-store/250364/large-10092020114031939.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/250364/large-10092020114033457.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camiseta Verde Estampa",
        category: 17,
        price: 19.0,
        brand: "Roupas Deslumbrante",
        description:
          "manho: 36<br />Cores: Off-white<br />Condição: Usado e em perfeitas condições<br />ID: 191413<br />Como medimos?<br />- Modelagem sino<br />- Decote redondo<br />- Manga bufante<br /><br />Tecido sem elasticidade<br /><br />Busto 84cm<br />Cintura 80cm<br />Manga 60cm<br />Comprimento 55cm",
        quantity: 62,
        provider: 14,
        createdBy: 2,
        imgA:
          "https://assets.troc.com.br/product-store/69253/large-01082018154132979.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/69253/large-01082018154132812.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/69253/large-01082018154132599.jpg",
        imgD:
          "https://assets.troc.com.br/product-store/69253/large-01082018154132724.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camiseta Preta Estampada",
        category: 17,
        price: 9.0,
        brand: "Roupas Irresistível",
        description:
          "- Modelagem reta<br />- Decote em V<br />- Transparência<br /><br />Tecido sem elasticidade<br /><br />Busto 94cm<br />Cintura 104cm<br />Comprimento 58cm",
        quantity: 95,
        provider: 15,
        createdBy: 2,
        imgA:
          "https://assets.troc.com.br/product-store/123046/large-27022019183506300.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/123046/large-27022019183511525.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/123046/large-27022019183517174.jpg",
        imgD:
          "https://assets.troc.com.br/product-store/123046/large-27022019183521705.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camiseta Navy Bordado",
        category: 17,
        price: 111.0,
        brand: "Roupas Irada",
        description:
          "- Modelagem reta<br />- Decote canoa<br />- Tecido com elastano<br />- 100% viscose",
        quantity: 23,
        provider: 2,
        createdBy: 4,
        imgA:
          "https://assets.troc.com.br/product-store/243401/large-28072020123404425.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/243401/large-28072020123404346.jpg",
        imgC: "",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camiseta Vermelha Bordado",
        category: 17,
        price: 103.0,
        brand: "Moda Harmônicos",
        description:
          "- Modelagem reta<br />- Decote em V<br />- Transparência<br /><br />Tecido sem elasticidade<br /><br />Busto 94cm<br />Cintura 104cm<br />Comprimento 58cm",
        quantity: 11,
        provider: 10,
        createdBy: 4,
        imgA:
          "https://assets.troc.com.br/product-store/224513/large-2702202017200347.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/224513/large-27022020172003967.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/224513/large-27022020172003132.jpg",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camiseta Preta Recortes",
        category: 17,
        price: 10.0,
        brand: "Sensacional Moda",
        description:
          "Tamanho: P<br />Cores: Multicolorido<br />Condição: Usado<br />ID: 6784<br />Como medimos?<br />Bata com estampa tribal. Possui detalhe bordado com pedraria no decote.<br /><br />Ombro 40 cm<br />Busto 94 cm<br />Comprimento 85 cm<br />Manga 36 cm<br />",
        quantity: 56,
        provider: 14,
        createdBy: 3,
        imgA:
          "https://assets.troc.com.br/product-store/228503/large-18032020110223453.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/228503/large-18032020110224744.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/228503/large-18032020110225699.jpg",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Camiseta Azul Estampa",
        category: 17,
        price: 12.0,
        brand: "Moda Genuínos",
        description:
          "- Modelagem reta<br />- Decote canoa<br />- Tecido com elastano<br />- 100% viscose",
        quantity: 95,
        provider: 10,
        createdBy: 4,
        imgA:
          "https://assets.troc.com.br/product-store/229166/large-16032020191013482.jpg",
        imgB:
          "https://assets.troc.com.br/product-store/229166/large-16032020191014737.jpg",
        imgC:
          "https://assets.troc.com.br/product-store/229166/large-16032020191015867.jpg",
        imgD: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products");
  },
};
