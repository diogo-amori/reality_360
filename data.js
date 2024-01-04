var APP_DATA = {
  "scenes": [
    {
      "id": "0-rea-externa",
      "name": "ÁREA EXTERNA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.3082627775349316,
        "pitch": 0.06638093084410812,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": -2.1040977163710046,
          "pitch": 0.05920557877657906,
          "rotation": 0,
          "target": "1-piscina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-piscina",
      "name": "PISCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.6916875157384972,
        "pitch": 0.04696084177450466,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": -2.0917517190007544,
          "pitch": 0.2870773706856724,
          "rotation": 0,
          "target": "2-lazer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lazer",
      "name": "LAZER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.9852822105923416,
        "pitch": 0.0030013879163846013,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": 2.2058140986070667,
          "pitch": 0.1425565726584015,
          "rotation": 0,
          "target": "3-gourmet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-gourmet",
      "name": "GOURMET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.209147500606507,
          "pitch": 0.18955538566600083,
          "rotation": 0,
          "target": "4-jantar"
        },
        {
          "yaw": -0.5101895502110363,
          "pitch": 0.21640050689177848,
          "rotation": 0,
          "target": "1-piscina"
        },
        {
          "yaw": 2.5417799644068957,
          "pitch": 0.015106720984375599,
          "rotation": 0,
          "target": "5-corredor-trreo"
        },
        {
          "yaw": 2.9697658684193353,
          "pitch": 0.004387265410565888,
          "rotation": 0,
          "target": "6-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-jantar",
      "name": "JANTAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.233306872068754,
          "pitch": 0.10423495339593458,
          "rotation": 0,
          "target": "3-gourmet"
        },
        {
          "yaw": 0.046531689999117276,
          "pitch": 0.08248536477223212,
          "rotation": 0,
          "target": "2-lazer"
        },
        {
          "yaw": 0.7808678381983469,
          "pitch": 0.02241761346900617,
          "rotation": 0,
          "target": "1-piscina"
        },
        {
          "yaw": 3.0613690654387042,
          "pitch": 0.0585117841821301,
          "rotation": 0,
          "target": "6-estar"
        },
        {
          "yaw": 2.3128509007303695,
          "pitch": 0.09896639516049355,
          "rotation": 0,
          "target": "5-corredor-trreo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-corredor-trreo",
      "name": "CORREDOR TÉRREO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0443824165517448,
          "pitch": 0.013309569514834863,
          "rotation": 0,
          "target": "1-piscina"
        },
        {
          "yaw": 0.1607042054985719,
          "pitch": 0.2010974445430005,
          "rotation": 0,
          "target": "3-gourmet"
        },
        {
          "yaw": -0.416094328326043,
          "pitch": 0.04668160930339127,
          "rotation": 0,
          "target": "4-jantar"
        },
        {
          "yaw": -2.6466548934225766,
          "pitch": 0.13922416399212345,
          "rotation": 0,
          "target": "6-estar"
        },
        {
          "yaw": 3.0437200624998972,
          "pitch": 0.14578316076699593,
          "rotation": 0,
          "target": "7-escada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-estar",
      "name": "ESTAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.5132073135527229,
        "pitch": 0.20119072739351118,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": -2.6948647757762956e-9,
          "pitch": 0.06430796562825947,
          "rotation": 0,
          "target": "4-jantar"
        },
        {
          "yaw": 1.8685700548148674,
          "pitch": 0.2143290935691482,
          "rotation": 0,
          "target": "7-escada"
        },
        {
          "yaw": 1.0124350866601333,
          "pitch": 0.19657534921478614,
          "rotation": 0,
          "target": "5-corredor-trreo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-escada",
      "name": "ESCADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.23999270991626354,
        "pitch": -0.11376272363989948,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": 0.6382114245400352,
          "pitch": 0.0305961168196891,
          "rotation": 0,
          "target": "9-lavabo"
        },
        {
          "yaw": 1.1970110129239249,
          "pitch": -0.02821885137477409,
          "rotation": 0,
          "target": "10-sute-casal"
        },
        {
          "yaw": -1.9676105000827881,
          "pitch": 0.13759395487549497,
          "rotation": 0,
          "target": "6-estar"
        },
        {
          "yaw": -1.2290037700381227,
          "pitch": 0.02877924489864725,
          "rotation": 0,
          "target": "3-gourmet"
        },
        {
          "yaw": -1.2641530353231225,
          "pitch": 0.2912143492549024,
          "rotation": 0,
          "target": "5-corredor-trreo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-hall",
      "name": "HALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.5435771786686239,
        "pitch": 0.06592743044514471,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": 2.8057446010190397,
          "pitch": 0.3558020017291952,
          "rotation": 0,
          "target": "6-estar"
        },
        {
          "yaw": 0.2900638307245007,
          "pitch": 0.05351703220603987,
          "rotation": 0,
          "target": "3-gourmet"
        },
        {
          "yaw": -0.03783519722880513,
          "pitch": 0.018577692782152155,
          "rotation": 0,
          "target": "1-piscina"
        },
        {
          "yaw": 1.315390043099228,
          "pitch": 0.1155971140914005,
          "rotation": 0,
          "target": "5-corredor-trreo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-lavabo",
      "name": "LAVABO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.099209232744781,
          "pitch": 0.26727500117122105,
          "rotation": 0,
          "target": "7-escada"
        },
        {
          "yaw": -0.4827114235375394,
          "pitch": 0.08977359259993456,
          "rotation": 0,
          "target": "7-escada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-sute-casal",
      "name": "SUÍTE CASAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.8540073395866372,
        "pitch": -0.018868139852671106,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": -1.4561233670434603,
          "pitch": 0.12586355992321607,
          "rotation": 0,
          "target": "7-escada"
        },
        {
          "yaw": 1.6854676745263832,
          "pitch": 0.0035494516199570114,
          "rotation": 0,
          "target": "0-rea-externa"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CASA VALÉRIA NOGUEIRA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
