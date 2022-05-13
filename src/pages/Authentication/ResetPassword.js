import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// action
import { resetUser, apiError, resetUserFailed } from "../../store/actions"

// Redux
import { connect } from "react-redux"
import { Link, useLocation } from "react-router-dom"

// import images
import logo from "../../assets/images/logo-sm-dark.png"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const ResetPassword = props => {
  const query = useQuery()
  const token = query.get('token')

  const handleValidSubmit = (event, values) => {
    values.token = token
    props.resetUser(values)
  }

  useEffect(() => {
    props.apiError("")
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-login text-center">
                  <div className="bg-login-overlay"></div>
                  <div className="position-relative">
                    <h5 className="text-white font-size-20">Reset Password</h5>
                    {/* <p className="text-white-50 mb-0">Get your free Qovex account now</p> */}
                    <Link to="/" className="logo logo-admin mt-4">
                      <img src={logo} alt="" height="30" />
                    </Link>
                  </div>
                </div>
                <div className="card-body pt-5">

                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      {props.result && props.result ? (
                        <Alert color="success">
                          Reset Password Successfully
                        </Alert>
                      ) : null}

                      {props?.resetError && props?.resetError ? (
                        <Alert color="danger">
                          {props.resetError}
                        </Alert>
                      ) : null}

                      {props.registrationError &&
                        props.registrationError ? (
                          <Alert color="danger">
                            {props.registrationError}
                          </Alert>
                        ) : null}
                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="New Password"
                          type="password"
                          required
                          placeholder="Enter New Password"
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="confirmPassword"
                          label="Confirm New Password"
                          type="password"
                          required
                          placeholder="Enter Password Again"
                        />
                      </div>

                      <div className="mt-4">
                        <button
                          className="btn btn-primary w-100 waves-effect waves-light"
                          type="submit"
                        >
                          Reset Password
                        </button>
                      </div>
                    </AvForm>

                  </div>
                </div>
              </Card>
              <div className="mt-5 text-center">
                <p>Already have an account ? <a href="/login" className="fw-medium text-primary">
                  Login</a> </p>
                <p>© {new Date().getFullYear()} Qovex. Crafted with <i
                    className="mdi mdi-heart text-danger"></i> by Themesbrand
                        </p>
              </div>
            </Col>
          </Row>
          </Container>
      </div>
    </React.Fragment>
  )
}

ResetPassword.propTypes = {
  resetUser: PropTypes.func,
  resetUserFailed: PropTypes.func,
  resetError: PropTypes.any,
  result: PropTypes.any,
}

const mapStatetoProps = state => {
  const { result, resetError, loading } = state.Reset
  return { result, resetError, loading }
}

export default connect(mapStatetoProps, {
  resetUser,
  apiError,
  resetUserFailed,
})(ResetPassword)
