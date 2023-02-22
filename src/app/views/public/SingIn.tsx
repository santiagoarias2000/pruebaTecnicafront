import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import createUser from "../../models/CreateUser";
import { useForm } from "../../utilities/hooks/useForm";
import Form from "react-bootstrap/Form";
import * as encriptar from "js-sha512";
import UserLoginService from "../../services/UserLoginService";
import { ApiBack } from "../../utilities/domines/ApiBack";

export const SingIn = () => {
  //Variables
  const myNavigate = useNavigate();
  type formHtml = React.FormEvent<HTMLFormElement>;
  const [enProceso, setProceso] = useState<boolean>(false); //Para saber si el formulario esta ya diligenciado o no
  let { nameUser, emailUser, passwordUser, typeUser, dobleLink, object } =
    useForm<createUser>(new createUser("", "", "", 0));

  //Funcion para limpiar cajas y variables
  const cleanBoxs = (myForm: HTMLFormElement) => {
    myForm.reset();
    object.nameUser = "";
    object.emailUser = "";
    object.passwordUser = "";

    myForm.nameUser.value = "";
    myForm.emailUser.value = "";
    myForm.passwordUser.value = "";

    myForm.classList.remove("was-validated");
  };

  const processForm = async (fh: formHtml) => {
    fh.preventDefault();
    setProceso(true);
    const formCurrent = fh.currentTarget;
    formCurrent.classList.add("was-validated");

    if (formCurrent.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
    } else {
      const passEncrypted = encriptar.sha512(object.passwordUser);
      object.passwordUser = passEncrypted;
      const urlCreate = ApiBack.URL + ApiBack.URL_PUBLIC_CREATE;
      const result = await UserLoginService.consumirService(urlCreate, object);
      if (result.tokenUsta) {
        localStorage.setItem("tokenUsta", result.tokenUsta);
        setProceso(false);
        myNavigate("/home");
      } else {
        cleanBoxs(formCurrent);
      }
    }
  };
  return (
    <div>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4"></div>

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Crear cuenta
                        </h5>
                      </div>

                      <Form
                        className="row g-3"
                        noValidate
                        validated={enProceso}
                        onSubmit={processForm}
                      >
                        <div className="col-12">
                          <Form.Group controlId="nameUser">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              name="nameUser"
                              className="form-control"
                              value={nameUser}
                              onChange={dobleLink}
                              placeholder="Nombre Usuario"
                            />
                            <Form.Control.Feedback type="invalid">
                              Please, enter your name!
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="typeUser"
                          >
                            <Col sm={10}>
                              <Form.Select
                                required
                                name="typeUser"
                                value={typeUser}
                                onChange={dobleLink}
                              >
                                <option value="">Seleccione el estado</option>
                                <option value={1}>Moderador</option>
                                <option value={2}>Estudiante</option>
                              </Form.Select>
                              <Form.Control.Feedback type="invalid">
                                Seleccione el estado del perfil
                              </Form.Control.Feedback>
                            </Col>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <Form.Group controlId="emailUser">
                            <Form.Label>e-mail</Form.Label>
                            <div className="input-group">
                              <span className="input-group-text">@</span>
                              <Form.Control
                                required
                                type="text"
                                name="emailUser"
                                className="form-control"
                                value={emailUser}
                                onChange={dobleLink}
                              />
                              <Form.Control.Feedback type="invalid">
                                You must input a valid e-mail
                              </Form.Control.Feedback>
                            </div>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <Form.Group controlId="passwordUser">
                            <Form.Label>Cntraseña</Form.Label>
                            <Form.Control
                              required
                              type="password"
                              name="passwordUser"
                              className="form-control"
                              minLength={6}
                              value={passwordUser}
                              onChange={dobleLink}
                              placeholder="Password"
                            />
                            <Form.Control.Feedback type="invalid">
                              PasswordUser incorrect
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="col-12">
                          <Form.Group controlId="repasswordUser">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                              required
                              type="password"
                              name="passwordUser"
                              className="form-control"
                              pattern={passwordUser}
                            />
                            <Form.Control.Feedback type="invalid">
                              PasswordUser incorrect
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Crear Cuenta
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            Ya tienes cuenta <Link to="/">Ingresar</Link>
                          </p>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
