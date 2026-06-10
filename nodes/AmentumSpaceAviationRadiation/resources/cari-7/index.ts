import type { INodeProperties } from 'n8n-workflow';

export const cari7Description: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					]
				}
			},
			"options": [
				{
					"name": "App API Cari 7 Endpoints CARI 7 Ambient Dose",
					"value": "App API Cari 7 Endpoints CARI 7 Ambient Dose",
					"action": "The ambient dose equivalent rate calculated for a single particle type, or accumulated over all particle types.\n",
					"description": "The ambient dose equivalent, H*(10), is an operational quantity that simulates the  human body by measuring the dose equivalent at a depth of 10 mm within a tissue  equivalent sphere of 300 mm diameter. It is a measurable quantity that is  used to calibrate area monitors (radiation detectors) for mixed radiation fields. \nUse this endpoint if you are comparing model predictions to measurements.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cari7/ambient_dose"
						}
					}
				},
				{
					"name": "App API Cari 7 Endpoints CARI 7 Effective Dose",
					"value": "App API Cari 7 Endpoints CARI 7 Effective Dose",
					"action": "The effective dose rate calculated for a single particle type, or accumulated over all particle types.\n",
					"description": "Effective Dose is a radiation protection quantity defined by the International Commission on\n Radiological Protection (ICRP) and represents the stochastic health\n risk to the human body at low levels of radiation.\nIt accounts for the different sensitivities of organs to ionising radiation, as well as the different effectiveness of various types of radiation.\nUse this endpoint if you need to estimate radiation exposures of personnel.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cari7/effective_dose"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /cari7/ambient_dose",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Altitude",
			"name": "altitude",
			"required": true,
			"description": "Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).",
			"default": 11,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "altitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Latitude",
			"name": "latitude",
			"required": true,
			"description": "Latitude. -90 (S) to 90 (N).",
			"default": 30,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "latitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Longitude",
			"name": "longitude",
			"required": true,
			"description": "Longitude. -180 (W) to 180 (E).",
			"default": 30,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "longitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Year",
			"name": "year",
			"required": true,
			"description": "Year in YYYY.",
			"default": 2019,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "year",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Month",
			"name": "month",
			"required": true,
			"description": "Month in MM.",
			"default": 12,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "month",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Day",
			"name": "day",
			"required": true,
			"description": "Day in DD.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "day",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Utc",
			"name": "utc",
			"required": true,
			"description": "Hour in 24 hour time.",
			"default": 3,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "utc",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Particle",
			"name": "particle",
			"required": true,
			"description": "The particle type as a string. Specifying 'total' returns the dose for all particle types.\n",
			"default": "total",
			"type": "options",
			"options": [
				{
					"name": "Total",
					"value": "total"
				},
				{
					"name": "Neutron",
					"value": "neutron"
				},
				{
					"name": "Photon",
					"value": "photon"
				},
				{
					"name": "E",
					"value": "e-"
				},
				{
					"name": "E",
					"value": "e+"
				},
				{
					"name": "Mu",
					"value": "mu-"
				},
				{
					"name": "Mu",
					"value": "mu+"
				},
				{
					"name": "Proton",
					"value": "proton"
				},
				{
					"name": "Pi",
					"value": "pi-"
				},
				{
					"name": "Pi",
					"value": "pi+"
				},
				{
					"name": "Deuteron",
					"value": "deuteron"
				},
				{
					"name": "Triton",
					"value": "triton"
				},
				{
					"name": "Helion",
					"value": "helion"
				},
				{
					"name": "Alpha",
					"value": "alpha"
				},
				{
					"name": "Li",
					"value": "Li"
				},
				{
					"name": "Be",
					"value": "Be"
				},
				{
					"name": "B",
					"value": "B"
				},
				{
					"name": "C",
					"value": "C"
				},
				{
					"name": "N",
					"value": "N"
				},
				{
					"name": "O",
					"value": "O"
				},
				{
					"name": "F",
					"value": "F"
				},
				{
					"name": "Ne",
					"value": "Ne"
				},
				{
					"name": "Na",
					"value": "Na"
				},
				{
					"name": "Mg",
					"value": "Mg"
				},
				{
					"name": "Al",
					"value": "Al"
				},
				{
					"name": "Si",
					"value": "Si"
				},
				{
					"name": "P",
					"value": "P"
				},
				{
					"name": "S",
					"value": "S"
				},
				{
					"name": "Cl",
					"value": "Cl"
				},
				{
					"name": "Ar",
					"value": "Ar"
				},
				{
					"name": "K",
					"value": "K"
				},
				{
					"name": "Ca",
					"value": "Ca"
				},
				{
					"name": "Sc",
					"value": "Sc"
				},
				{
					"name": "Ti",
					"value": "Ti"
				},
				{
					"name": "V",
					"value": "V"
				},
				{
					"name": "Cr",
					"value": "Cr"
				},
				{
					"name": "Mn",
					"value": "Mn"
				},
				{
					"name": "Fe",
					"value": "Fe"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "particle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "GET /cari7/effective_dose",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Altitude",
			"name": "altitude",
			"required": true,
			"description": "Altitude (in km). The minimum is 0 m, the maximum is 47 km (the upper limit of the stratosphere).",
			"default": 11,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "altitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Latitude",
			"name": "latitude",
			"required": true,
			"description": "Latitude. -90 (S) to 90 (N).",
			"default": 30,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "latitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Longitude",
			"name": "longitude",
			"required": true,
			"description": "Longitude. -180 (W) to 180 (E).",
			"default": 30,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "longitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Year",
			"name": "year",
			"required": true,
			"description": "Year in YYYY.",
			"default": 2019,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "year",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Month",
			"name": "month",
			"required": true,
			"description": "Month in MM.",
			"default": 12,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "month",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Day",
			"name": "day",
			"required": true,
			"description": "Day in DD.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "day",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Utc",
			"name": "utc",
			"required": true,
			"description": "Hour in 24 hour time.",
			"default": 3,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "utc",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Particle",
			"name": "particle",
			"required": true,
			"description": "The particle type as a string. Specifying 'total' returns the dose for all particle types.\n",
			"default": "total",
			"type": "options",
			"options": [
				{
					"name": "Total",
					"value": "total"
				},
				{
					"name": "Neutron",
					"value": "neutron"
				},
				{
					"name": "Photon",
					"value": "photon"
				},
				{
					"name": "E",
					"value": "e-"
				},
				{
					"name": "E",
					"value": "e+"
				},
				{
					"name": "Mu",
					"value": "mu-"
				},
				{
					"name": "Mu",
					"value": "mu+"
				},
				{
					"name": "Proton",
					"value": "proton"
				},
				{
					"name": "Pi",
					"value": "pi-"
				},
				{
					"name": "Pi",
					"value": "pi+"
				},
				{
					"name": "Deuteron",
					"value": "deuteron"
				},
				{
					"name": "Triton",
					"value": "triton"
				},
				{
					"name": "Helion",
					"value": "helion"
				},
				{
					"name": "Alpha",
					"value": "alpha"
				},
				{
					"name": "Li",
					"value": "Li"
				},
				{
					"name": "Be",
					"value": "Be"
				},
				{
					"name": "B",
					"value": "B"
				},
				{
					"name": "C",
					"value": "C"
				},
				{
					"name": "N",
					"value": "N"
				},
				{
					"name": "O",
					"value": "O"
				},
				{
					"name": "F",
					"value": "F"
				},
				{
					"name": "Ne",
					"value": "Ne"
				},
				{
					"name": "Na",
					"value": "Na"
				},
				{
					"name": "Mg",
					"value": "Mg"
				},
				{
					"name": "Al",
					"value": "Al"
				},
				{
					"name": "Si",
					"value": "Si"
				},
				{
					"name": "P",
					"value": "P"
				},
				{
					"name": "S",
					"value": "S"
				},
				{
					"name": "Cl",
					"value": "Cl"
				},
				{
					"name": "Ar",
					"value": "Ar"
				},
				{
					"name": "K",
					"value": "K"
				},
				{
					"name": "Ca",
					"value": "Ca"
				},
				{
					"name": "Sc",
					"value": "Sc"
				},
				{
					"name": "Ti",
					"value": "Ti"
				},
				{
					"name": "V",
					"value": "V"
				},
				{
					"name": "Cr",
					"value": "Cr"
				},
				{
					"name": "Mn",
					"value": "Mn"
				},
				{
					"name": "Fe",
					"value": "Fe"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "particle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cari 7"
					],
					"operation": [
						"App API Cari 7 Endpoints CARI 7 Effective Dose"
					]
				}
			}
		},
];
