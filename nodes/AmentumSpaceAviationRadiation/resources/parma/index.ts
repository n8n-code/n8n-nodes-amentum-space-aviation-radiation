import type { INodeProperties } from 'n8n-workflow';

export const parmaDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Parma"
					]
				}
			},
			"options": [
				{
					"name": "App API Parma Endpoints PARMA Ambient Dose",
					"value": "App API Parma Endpoints PARMA Ambient Dose",
					"action": "The ambient dose equivalent rate calculated for a single particle type, or accumulated over all particle types.\n",
					"description": "The ambient dose equivalent, H*(10), is an operational quantity that simulates the  human body by measuring the dose equivalent at a depth of 10 mm within a tissue  equivalent sphere of 300 mm diameter. It is a measurable quantity that is  used to calibrate area monitors (radiation detectors) for mixed radiation fields. \nUse this endpoint if you are comparing model predictions to measurements.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/parma/ambient_dose"
						}
					}
				},
				{
					"name": "App API Parma Endpoints PARMA Differential Intensity",
					"value": "App API Parma Endpoints PARMA Differential Intensity",
					"action": "The energy differential intensity of a particle at a given zenith angle.",
					"description": "The differential intensity of a particle is a directional quantity that describes the number of particles per unit area, per unit solid angle, per unit energy, and per unit time. The API leverages the functionality of PARMA to calculate differential intensity distributions with energies in units of MeV and Intensity in units of /cm2/sr/MeV/s.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/parma/differential_intensity"
						}
					}
				},
				{
					"name": "App API Parma Endpoints PARMA Effective Dose",
					"value": "App API Parma Endpoints PARMA Effective Dose",
					"action": "The effective dose rate calculated for a single particle type, or accumulated over all particle types.\n",
					"description": "Effective dose is a radiation protection quantity defined by the International Commission on Radiological Protection (ICRP) and represents the stochastic health risk to the human body at low levels of radiation. It accounts for the different sensitivities of organs to ionising radiation, as well as the different effectiveness of various types of radiation.\nUse this endpoint if you need to estimate radiation exposures of personnel.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/parma/effective_dose"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /parma/ambient_dose",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Altitude",
			"name": "altitude",
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Atmospheric Depth",
			"name": "atmospheric_depth",
			"description": "Atmospheric depth from the top of the atmosphere (in units of g/cm2). The minimum is 0.913 g/cm2, the maximum is 1032.66 g/cm2. WARNING: you can specify either altitude OR atmospheric depth, not both.\n",
			"default": 0.92,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "atmospheric_depth",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Ambient Dose"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Ambient Dose"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Ambient Dose"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Ambient Dose"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Ambient Dose"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Particle",
			"name": "particle",
			"required": true,
			"description": "The particle type as a string. Specifying 'total', only used for the dose calculation, returns the dose for all particle types.\n",
			"default": "proton",
			"type": "options",
			"options": [
				{
					"name": "Total",
					"value": "total"
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
					"value": "mu+"
				},
				{
					"name": "Mu",
					"value": "mu-"
				},
				{
					"name": "Gamma",
					"value": "gamma"
				},
				{
					"name": "Neutron",
					"value": "neutron"
				},
				{
					"name": "Proton",
					"value": "proton"
				},
				{
					"name": "Alpha",
					"value": "alpha"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "GET /parma/differential_intensity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Differential Intensity"
					]
				}
			}
		},
		{
			"displayName": "Altitude",
			"name": "altitude",
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Differential Intensity"
					]
				}
			}
		},
		{
			"displayName": "Atmospheric Depth",
			"name": "atmospheric_depth",
			"description": "Atmospheric depth from the top of the atmosphere (in units of g/cm2). The minimum is 0.913 g/cm2, the maximum is 1032.66 g/cm2. WARNING: you can specify either altitude OR atmospheric depth, not both.\n",
			"default": 0.92,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "atmospheric_depth",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Differential Intensity"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Differential Intensity"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Differential Intensity"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Differential Intensity"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Differential Intensity"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Differential Intensity"
					]
				}
			}
		},
		{
			"displayName": "Particle",
			"name": "particle",
			"required": true,
			"description": "The particle type as a string. Specifying 'total', only used for the dose calculation, returns the dose for all particle types.\n",
			"default": "proton",
			"type": "options",
			"options": [
				{
					"name": "Total",
					"value": "total"
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
					"value": "mu+"
				},
				{
					"name": "Mu",
					"value": "mu-"
				},
				{
					"name": "Gamma",
					"value": "gamma"
				},
				{
					"name": "Neutron",
					"value": "neutron"
				},
				{
					"name": "Proton",
					"value": "proton"
				},
				{
					"name": "Alpha",
					"value": "alpha"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Differential Intensity"
					]
				}
			}
		},
		{
			"displayName": "Angle",
			"name": "angle",
			"required": true,
			"description": "Direction cosine. 1.0 is in the downward direction.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "angle",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Differential Intensity"
					]
				}
			}
		},
		{
			"displayName": "GET /parma/effective_dose",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Altitude",
			"name": "altitude",
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Atmospheric Depth",
			"name": "atmospheric_depth",
			"description": "Atmospheric depth from the top of the atmosphere (in units of g/cm2). The minimum is 0.913 g/cm2, the maximum is 1032.66 g/cm2. WARNING: you can specify either altitude OR atmospheric depth, not both.\n",
			"default": 0.92,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "atmospheric_depth",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Effective Dose"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Effective Dose"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Effective Dose"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Effective Dose"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Effective Dose"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Particle",
			"name": "particle",
			"required": true,
			"description": "The particle type as a string. Specifying 'total', only used for the dose calculation, returns the dose for all particle types.\n",
			"default": "proton",
			"type": "options",
			"options": [
				{
					"name": "Total",
					"value": "total"
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
					"value": "mu+"
				},
				{
					"name": "Mu",
					"value": "mu-"
				},
				{
					"name": "Gamma",
					"value": "gamma"
				},
				{
					"name": "Neutron",
					"value": "neutron"
				},
				{
					"name": "Proton",
					"value": "proton"
				},
				{
					"name": "Alpha",
					"value": "alpha"
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
						"Parma"
					],
					"operation": [
						"App API Parma Endpoints PARMA Effective Dose"
					]
				}
			}
		},
];
