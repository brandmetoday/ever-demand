export interface RegisterUserArgsInterface {
	registerInput: {
		user: {
			lastName: string;
			firstName: string;
			geoLocation: {
				loc: {
					coordinates: [number, number];
					type: string;
				};
				house: string;
				streetAddress: string;
				city: string;
				countryId: number;
			};
			apartment: string;
		};
	};
}
