import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Login.css";

export default function Login(props) {
	const { getToken } = props;

	const SignupSchema = Yup.object().shape({
		password: Yup.string()
			.min(2, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),

		email: Yup.string().email("Invalid email").required("Required"),
	});

	return (
		<div class="container-login">
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validationSchema={SignupSchema}
				onSubmit={({ email, password }) => {
					// same shape as initial values

					getToken(email, password);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div class="form-group" style={{ margin: "1.5rem 0" }}>
							<label for="exampleInputEmail1">
								Email address
							</label>
							<Field
								class="form-control"
								id="exampleInputEmail1"
								placeholder="Enter email"
								name="email"
								type="email"
							/>

							{errors.email && touched.email ? (
								<div class="alert alert-danger" role="alert">
									{errors.email}
								</div>
							) : null}
						</div>

						<label for="exampleInputPassword1">Password</label>
						<Field
							type="password"
							class="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
							name="password"
						/>

						{errors.password && touched.password ? (
							<div class="alert alert-danger" role="alert">
								{errors.password}
							</div>
						) : null}
						<small id="passwordHelp" class="form-text text-muted">
							We'll never share your password with anyone else.
						</small>
						<button type="submit" class="btn btn-primary">
							Login
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
