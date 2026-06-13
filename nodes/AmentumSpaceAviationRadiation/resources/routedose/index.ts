import type { INodeProperties } from 'n8n-workflow';

export const routedoseDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					]
				}
			},
			"options": [
				{
					"name": "App API Icaro Endpoints ICARO Ambient Dose",
					"value": "App API Icaro Endpoints ICARO Ambient Dose",
					"action": "Calculate the ambient equivalent dose along a great circle flight route.\n",
					"description": "The ambient dose equivalent, H*(10), is an operational quantity that simulates the  human body by measuring the dose equivalent at a depth of 10 mm within a tissue  equivalent sphere of 300 mm diameter. It is a measurable quantity that is  used to calibrate area monitors (radiation detectors) for mixed radiation fields.  <br> <br> Use this endpoint if you are comparing model predictions to measurements. <br> <br> This API can run in two modes: <br> <br> Either specify <br> <b>altitude</b>, <b>duration</b><br> for constant altitude calculations; <br> <br> Or specify <br> <b>initial_altitude</b>, <b>cruising_altitudes</b>, <b>climb_times</b>, <b>cruising_times</b>, <b>descent_time</b>, <b>final_altitude</b><br> to calculate dose accounting for a step climb. <br> <br> Note: the airport codes or coordinates (depending on which was specified), and the date in DD/MM/YYYY format, are echoed in the json response as strings.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/route/ambient_dose"
						}
					}
				},
				{
					"name": "App API Icaro Endpoints ICARO Effective Dose",
					"value": "App API Icaro Endpoints ICARO Effective Dose",
					"action": "Calculate the total effective dose along a great circle flight route.\n",
					"description": "Effective Dose is a radiation protection quantity defined by the International Commission on\n Radiological Protection (ICRP) and represents the stochastic health\n risk to the human body at low levels of radiation.\nIt accounts for the different sensitivities of organs to ionising radiation, as well as the different effectiveness of various types of radiation. <br> <br> Use this endpoint if you need to estimate radiation exposures of personnel. <br> <br> This API can run in two modes: <br> <br> Either specify <br> <b>altitude</b>, <b>duration</b><br> for constant altitude calculations; <br> <br> Or specify <br> <b>initial_altitude</b>, <b>cruising_altitudes</b>, <b>climb_times</b>, <b>cruising_times</b>, <b>descent_time</b>, <b>final_altitude</b><br> to calculate dose accounting for a step climb. <br> <br> Note: the airport codes or coordinates (depending on which was specified), and the date in DD/MM/YYYY format, are echoed in the json response as strings.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/route/effective_dose"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /route/ambient_dose",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Origin",
			"name": "origin",
			"required": true,
			"description": "The ICAO code or IATA code or latitude,longitude pair (in decimal degrees) of the origin airport.",
			"default": "YSSY",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "origin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Destination",
			"name": "destination",
			"required": true,
			"description": "The ICAO code or IATA code or latitude,longitude pair (in decimal degrees) of the destination airport.",
			"default": "33.94250107,-118.4079971",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "destination",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Altitude",
			"name": "altitude",
			"description": "Altitude (in km). The minimum is 0 m, the maximum is 20 km.",
			"default": 10.1,
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
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Duration",
			"name": "duration",
			"description": "The flight duration in hours. The minimum is 0, the maximum is 20 hrs.",
			"default": 5,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "duration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Initial Altitude",
			"name": "initial_altitude",
			"description": "Initial altitude (in km). The minimum is 0 m, the maximum is 20 km.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "initial_altitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Cruising Altitudes",
			"name": "cruising_altitudes",
			"description": "Cruising altitudes (in km). The minimum is 0 m, the maximum is 20 km.",
			"default": "[\n  10,\n  15\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "cruising_altitudes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Climb Times",
			"name": "climb_times",
			"description": "Climb times for each cruising altitude (hours).",
			"default": "[\n  0.1,\n  0.5\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "climb_times",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Cruising Times",
			"name": "cruising_times",
			"description": "Cruising times at each cruising altitude (hours).",
			"default": "[\n  1,\n  2\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "cruising_times",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Descent Time",
			"name": "descent_time",
			"description": "Descent time from last cruising altitude to final altitude (hours).",
			"default": 0.5,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "descent_time",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Final Altitude",
			"name": "final_altitude",
			"description": "Final altitude (in km).",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "final_altitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Ambient Dose"
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
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Month",
			"name": "month",
			"required": true,
			"description": "Month in MM.",
			"default": 5,
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
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "Day",
			"name": "day",
			"required": true,
			"description": "Day in DD.",
			"default": 21,
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
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Ambient Dose"
					]
				}
			}
		},
		{
			"displayName": "GET /route/effective_dose",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Origin",
			"name": "origin",
			"required": true,
			"description": "The ICAO code or IATA code or latitude,longitude pair (in decimal degrees) of the origin airport.",
			"default": "YSSY",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "origin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Destination",
			"name": "destination",
			"required": true,
			"description": "The ICAO code or IATA code or latitude,longitude pair (in decimal degrees) of the destination airport.",
			"default": "33.94250107,-118.4079971",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "destination",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Altitude",
			"name": "altitude",
			"description": "Altitude (in km). The minimum is 0 m, the maximum is 20 km.",
			"default": 10.1,
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
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Duration",
			"name": "duration",
			"description": "The flight duration in hours. The minimum is 0, the maximum is 20 hrs.",
			"default": 5,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "duration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Initial Altitude",
			"name": "initial_altitude",
			"description": "Initial altitude (in km). The minimum is 0 m, the maximum is 20 km.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "initial_altitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Cruising Altitudes",
			"name": "cruising_altitudes",
			"description": "Cruising altitudes (in km). The minimum is 0 m, the maximum is 20 km.",
			"default": "[\n  10,\n  15\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "cruising_altitudes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Climb Times",
			"name": "climb_times",
			"description": "Climb times for each cruising altitude (hours).",
			"default": "[\n  0.1,\n  0.5\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "climb_times",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Cruising Times",
			"name": "cruising_times",
			"description": "Cruising times at each cruising altitude (hours).",
			"default": "[\n  1,\n  2\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "cruising_times",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Descent Time",
			"name": "descent_time",
			"description": "Descent time from last cruising altitude to final altitude (hours).",
			"default": 0.5,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "descent_time",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Final Altitude",
			"name": "final_altitude",
			"description": "Final altitude (in km).",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "final_altitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Effective Dose"
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
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Month",
			"name": "month",
			"required": true,
			"description": "Month in MM.",
			"default": 5,
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
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Effective Dose"
					]
				}
			}
		},
		{
			"displayName": "Day",
			"name": "day",
			"required": true,
			"description": "Day in DD.",
			"default": 21,
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
						"Routedose"
					],
					"operation": [
						"App API Icaro Endpoints ICARO Effective Dose"
					]
				}
			}
		},
];
