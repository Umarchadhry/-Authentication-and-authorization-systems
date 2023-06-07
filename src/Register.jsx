import {Container,Button,Grid,Paper,TextField,IconButton,InputAdornment,} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = () => {
const navigate = useNavigate();
const [values, setValues] = useState({
    username:"",
	email: "",
	pass: "",
    phone:"",
	showPass: false,
});

const handleSubmit = (e) => {
	e.preventDefault();
	axios.post("http://localhost:4000/api/login/", {
            username: values.username,
			email: values.email,
			password: values.pass,
            phone: values.phone,

		})
		.then((res) => {localStorage.setItem("token", res.data.token);
    navigate("/Login")
		})
		.catch((err) => console.error(err));
};
const handlePassVisibilty = () => {
	setValues({
		...values,
		showPass: !values.showPass,
	});
};

	return (
		<div>
<Container maxWidth="sm">
<Grid
	container
	spacing={4}
	direction="column"
	justifyContent="center"
	style={{ minHeight: "100vh" }}
>
<Paper elelvation={4} sx={{ padding: 5 }}>
<form onSubmit={handleSubmit}>
<Grid container direction="column" spacing={4}>

<Grid item>
		<TextField
			type="username"
			fullWidth
			label="UserName"
			placeholder="UserName"
			variant="outlined"
			required
			onChange={(e) => setValues({ ...values, UserName: e.target.value })}
		/>
	</Grid>

	<Grid item>
		<TextField
			type="email"
			fullWidth
			label="Enter your email"
			placeholder="Email Address"
			variant="outlined"
			required
			onChange={(e) => setValues({ ...values, email: e.target.value })}
		/>
	</Grid>

	<Grid item>
	<TextField
		type={values.showPass ? "text" : "password"}
		fullWidth
		label="Password"
		placeholder="Password"
		variant="outlined"
		required
		onChange={(e) => setValues({ ...values, pass: e.target.value })}
		InputProps={{
			endAdornment: (
				<InputAdornment position="end">
					<IconButton
						onClick={handlePassVisibilty}
						aria-label="toggle password"
						edge="end"
					>
						{values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
					</IconButton>
				</InputAdornment>
			),
		}}
	/>
	</Grid>

  <Grid item>
		<TextField
			type="phone"
			fullWidth
			label="Enter your phone"
			placeholder="Phone Number"
			variant="outlined"
			required
			onChange={(e) => setValues({ ...values, phone: e.target.value })}
		/>
	</Grid>

	<Grid item>
	<Button type="submit" fullWidth variant="contained">
		Sign up
	</Button>
	</Grid>
</Grid>
</form>
</Paper>
</Grid>
</Container>
		</div>
	);
};

export default Register;
