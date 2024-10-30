import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Snackbar, Alert } from '@mui/material';

interface AlertProps {
	severity: string;
	

}

const AlertComponent: React.FC<{ message: string; onClose: () => void; props: object  }> = ({ message, onClose, props }) => {
	const [open, setOpen] = useState(true);

	useEffect(() => {
    	const timer = setTimeout(() => setOpen(false), 3000); // Automatically hide after 3 seconds
    	return () => clearTimeout(timer);
	}, []);

	return (
    	<Snackbar
    		open={open}
    		autoHideDuration={3000}
    		onClose={onClose}
    		anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    	>
    	<Alert onClose={onClose} severity={props.severity == undefined ? } sx={{ width: '100%' }}>
    	    {message}
		</Alert>
    	</Snackbar>
	);
};

export const alertService = {
	showAlert(message: string) {
    	const container = document.createElement('div');
    	document.body.appendChild(container);

    	const handleClose = () => {
    		ReactDOM.unmountComponentAtNode(container);
    		container.remove();
    	};

    	ReactDOM.render(<AlertComponent message={message} onClose={handleClose} props={}/>, container);
	},
};
