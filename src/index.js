import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent
} from "lz-string"

const compressed = compressToEncodedURIComponent(
  JSON.stringify([
    {
      _id: "5d3f5e6bcb2c6f4ba1914846",
      index: 0,
      guid: "af006337-9c7e-4d3b-ba33-06aff8988874",
      isActive: true,
      balance: "$1,088.84",
      picture: "http://placehold.it/32x32",
      age: 40,
      eyeColor: "green",
      name: {
        first: "Jeannine",
        last: "Mcgee"
      },
      company: "COSMOSIS",
      email: "jeannine.mcgee@cosmosis.us",
      phone: "+1 (978) 489-2310",
      address: "181 Kensington Street, Florence, Wyoming, 9181",
      about:
        "Aute occaecat consectetur occaecat Lorem dolore laborum cillum aliquip tempor consequat. Pariatur ad excepteur est sunt laborum aute. Eiusmod aliqua nostrud officia sit nostrud aliquip sunt est laborum tempor irure. Laboris aliqua pariatur qui cupidatat in occaecat mollit consectetur amet laboris ullamco anim duis.",
      registered: "Wednesday, October 8, 2014 8:59 PM",
      latitude: "5.716298",
      longitude: "-11.166914",
      tags: ["nisi", "minim", "ullamco", "qui", "velit"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Sally Norton"
        },
        {
          id: 1,
          name: "Bartlett Day"
        },
        {
          id: 2,
          name: "Brennan Russo"
        }
      ],
      greeting: "Hello, Jeannine! You have 5 unread messages.",
      favoriteFruit: "apple"
    },
    {
      _id: "5d3f5e6b3a2df2648d765a88",
      index: 1,
      guid: "c5151f55-fe92-4b90-85cd-a45fd928f1a0",
      isActive: true,
      balance: "$3,318.61",
      picture: "http://placehold.it/32x32",
      age: 21,
      eyeColor: "green",
      name: {
        first: "Bell",
        last: "Patton"
      },
      company: "MATRIXITY",
      email: "bell.patton@matrixity.info",
      phone: "+1 (881) 548-2065",
      address: "793 McKibben Street, Madaket, Tennessee, 1024",
      about:
        "Proident deserunt adipisicing occaecat reprehenderit aliquip irure amet aliqua dolor officia qui eu ea. Qui dolore qui quis Lorem fugiat consectetur nisi aliquip. Ex ad elit fugiat ullamco consequat proident reprehenderit esse cupidatat nostrud eu minim amet. Velit nisi occaecat aute laborum aliquip. Lorem laborum exercitation ad nisi voluptate et enim reprehenderit.",
      registered: "Monday, September 10, 2018 1:45 AM",
      latitude: "3.683819",
      longitude: "-77.788125",
      tags: ["amet", "eu", "veniam", "fugiat", "non"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Conley Reed"
        },
        {
          id: 1,
          name: "Hahn Shaw"
        },
        {
          id: 2,
          name: "Andrews Wilson"
        }
      ],
      greeting: "Hello, Bell! You have 6 unread messages.",
      favoriteFruit: "apple"
    },
    {
      _id: "5d3f5e6bbc6af90f1c1323f2",
      index: 2,
      guid: "b1af1bad-d1e1-4578-9062-febb06473e5a",
      isActive: false,
      balance: "$1,765.03",
      picture: "http://placehold.it/32x32",
      age: 23,
      eyeColor: "green",
      name: {
        first: "Bean",
        last: "Guerrero"
      },
      company: "KENGEN",
      email: "bean.guerrero@kengen.biz",
      phone: "+1 (976) 463-2845",
      address: "902 Navy Walk, Cazadero, South Carolina, 2109",
      about:
        "Ad veniam ea irure occaecat mollit exercitation. Mollit est ex consequat Lorem velit est quis eiusmod nisi aliquip quis. Cillum non mollit magna cillum amet elit ad elit. Ullamco in minim quis esse tempor consequat elit occaecat. Occaecat deserunt est ad mollit culpa laborum sint sint non ea. Et amet sint in veniam.",
      registered: "Wednesday, November 28, 2018 10:15 PM",
      latitude: "-27.067812",
      longitude: "73.49915",
      tags: ["laborum", "ipsum", "cillum", "aute", "cupidatat"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Douglas Lowe"
        },
        {
          id: 1,
          name: "Liliana Sanford"
        },
        {
          id: 2,
          name: "Addie Thornton"
        }
      ],
      greeting: "Hello, Bean! You have 6 unread messages.",
      favoriteFruit: "strawberry"
    },
    {
      _id: "5d3f5e6b86436ab3332bbf84",
      index: 3,
      guid: "a6cda5cf-7413-428a-b366-1b0fcf10c346",
      isActive: false,
      balance: "$2,909.57",
      picture: "http://placehold.it/32x32",
      age: 40,
      eyeColor: "green",
      name: {
        first: "Alicia",
        last: "Oneill"
      },
      company: "AVENETRO",
      email: "alicia.oneill@avenetro.ca",
      phone: "+1 (903) 534-3839",
      address: "386 Seton Place, Delwood, Montana, 9882",
      about:
        "In non ullamco id amet ea labore. Ut elit labore ex officia dolore anim cupidatat nisi aliqua nulla. Eu officia veniam adipisicing amet Lorem est voluptate dolor ad aliquip minim voluptate. Eu excepteur cillum dolore elit velit excepteur.",
      registered: "Thursday, February 25, 2016 4:43 AM",
      latitude: "52.297479",
      longitude: "-130.498193",
      tags: ["sit", "id", "id", "excepteur", "adipisicing"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Chandra Camacho"
        },
        {
          id: 1,
          name: "Owen Kramer"
        },
        {
          id: 2,
          name: "Kate Pace"
        }
      ],
      greeting: "Hello, Alicia! You have 9 unread messages.",
      favoriteFruit: "apple"
    },
    {
      _id: "5d3f5e6c3a469160b94b5811",
      index: 4,
      guid: "90450f04-ec2e-465c-84c1-b6b19fe78229",
      isActive: false,
      balance: "$3,598.81",
      picture: "http://placehold.it/32x32",
      age: 20,
      eyeColor: "green",
      name: {
        first: "Floyd",
        last: "Whitehead"
      },
      company: "PAPRICUT",
      email: "floyd.whitehead@papricut.io",
      phone: "+1 (906) 544-3564",
      address: "611 Colonial Road, Wright, Virgin Islands, 8476",
      about:
        "Ut cupidatat ullamco proident cupidatat qui. Excepteur non eiusmod in est commodo. Sint deserunt esse labore enim consequat voluptate. Esse Lorem Lorem veniam voluptate officia aliqua ea sint consectetur ut duis sint elit. Commodo non minim nostrud ut consectetur commodo enim non ea. Aliquip pariatur amet commodo voluptate sit eiusmod ad voluptate.",
      registered: "Sunday, April 13, 2014 10:14 AM",
      latitude: "-75.122712",
      longitude: "104.164219",
      tags: ["nulla", "Lorem", "Lorem", "esse", "Lorem"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Graciela Koch"
        },
        {
          id: 1,
          name: "Wilcox Cobb"
        },
        {
          id: 2,
          name: "Morgan Barnett"
        }
      ],
      greeting: "Hello, Floyd! You have 8 unread messages.",
      favoriteFruit: "strawberry"
    }
  ])
)

// const decompressed = decompress(compressed)

console.log(compressed)

const url = new URL(window.location.href)
console.log(decompressFromEncodedURIComponent(url.searchParams.get("data")))
