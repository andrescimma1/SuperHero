import { Formik, Form, Field } from "formik";

import * as Yup from "yup";

export default function Login(props) {
	const SignupSchema = Yup.object().shape({
		firstName: Yup.string()
			.min(6, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),

		email: Yup.string().email("Invalid email").required("Required"),
	});

	return (
		<div>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validationSchema={SignupSchema}
				onSubmit={(values) => {
					// same shape as initial values

					console.log(values);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<Field name="email" type="email" />

						{errors.email && touched.email ? (
							<div class="alert alert-danger" role="alert">
								{errors.email}
							</div>
						) : null}

						<Field name="password" type="password" />

						{errors.password && touched.password ? (
							<div>{errors.password}</div>
						) : null}
						<button type="submit">Login</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
