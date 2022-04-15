import React from 'react';
import {getLocalStoreItem} from '../../utils';

//Planned of having other error components into this
export const ErrorComponent = (error: any) => {
	return (
		<>
			{
				error && error?.status === 500
					? location.replace('/error-500')
					: (!getLocalStoreItem('auth') || [401, 403].includes(error?.status))
						? location.replace('/')
						: error?.status === 404
							? location.replace('/error-404')
							: undefined
			}
			
		</>
	);
}


