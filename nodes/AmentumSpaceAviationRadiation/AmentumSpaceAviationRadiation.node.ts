import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { cari7Description } from './resources/cari-7';
import { routedoseDescription } from './resources/routedose';
import { parmaDescription } from './resources/parma';

export class AmentumSpaceAviationRadiation implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Amentum Space Aviation Radiation',
		name: 'N8nDevAmentumSpaceAviationRadiation',
		icon: { light: 'file:./amentum-space-aviation-radiation.svg', dark: 'file:./amentum-space-aviation-radiation.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Atmosphere shields from solar and intergalactic high-energy particle radiation.',
		defaults: { name: 'Amentum Space Aviation Radiation' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAmentumSpaceAviationRadiationApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Cari 7",
					"value": "Cari 7",
					"description": "Developed by the US Federal Aviation Administration's  Civil Aerospace Medical Institute, CARI7 calculates cosmic  ray doses in the atmosphere. See <a href=\"https://academic.oup.com/rpd/article/175/4/419/2884614\">here</a> for a complete description of  CARI-7. The original source code and Terms and Conditions can be found <a href=\"https://www.faa.gov/data_research/research/med_humanfacs/aeromedical/radiobiology/cari7/\">here</a><br><br> <br><br> Note: The dose is considered a monthly average. It accounts for for heliocentric potential modulation only, minor geomagnetic storm and forbush decreases are ignored.\n"
				},
				{
					"name": "Routedose",
					"value": "Routedose",
					"description": "The Route Dose API estimates radiation doses along a flight route between two airports with known ICAO or IATA codes or coordinates as latitude/longitude. Waypoints are calculated assuming a great circle  route, and either a constant altitude (in kilometers) and a flight duration (in hours) or lists of altitudes and cruising times to define a step climb.  Dose rates are then calculated at each waypoint using CARI-7.  The dose rate profile is integrated along the route to obtain the total dose for the flight. <br><br> Note: Dose is considered a monthly average accounting for heliocentric potential (HP) modulation only, minor geomagnetic storm and forbush decrease corrections are ignored. The calculation relies on HP data from the US Federal Aviation Administration that is released monthly. Doses can be calculated on the current date and short-range forecasting  of several weeks is supported (the exact forecast horizon depends on the release date of the FAA data).\n"
				},
				{
					"name": "Parma",
					"value": "Parma",
					"description": "The PARMA model was developed by the Japan Atomic Energy Agency (JAEA) and estimates fluxes of neutrons, protons, ions, muons, electrons, positrons, and photons on a given date, latitude, longitude, and altitude. A comprehensive description of PARMA can be found in the publications <a href=\"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0160390\">here</a> and <a href=\"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144679\">here</a>.<br><br> <br><br> Note: the PARMA API only accounts for heliocentric potential modulation, minor geomagnetic storm and forbush decreases are ignored.\n"
				}
			],
			"default": ""
		},
		...cari7Description,
		...routedoseDescription,
		...parmaDescription
		],
	};
}
