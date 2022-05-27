import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// action
import { verifyEmail,apiError,verifyEmailFailed} from '../../store/actions'

// Redux
import { connect } from "react-redux"
import { Link, useLocation } from "react-router-dom"

// import images
import logo from "../../assets/images/logo-sm-dark.png"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const VerifyEmail = props => {
  const query = useQuery()
  const token = query.get('token')

  const handleValidSubmit = (event, values) => {
    values.token = token
    props.verifyEmail(values)
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
                    <h5 className="text-white font-size-20">Verification</h5>
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
                     {props.user ? (
                      <Alert color="success" className="text-center mb-4" style={{ marginTop: "13px" }}>
                        {props.user}
                      </Alert>
                    ) : null}

                      {props?.verifyError && props?.verifyError ? (
                        <Alert color="danger">
                          {props.verifyError}
                        </Alert>
                      ) : null}

                      {props.registrationError &&
                        props.registrationError ? (
                          <Alert color="danger">
                            {props.registrationError}
                          </Alert>
                        ) : null}
                      <div className="mt-4">
                        <button
                          className="btn btn-primary w-100 waves-effect waves-light"
                          type="submit"
                        >
                          Verify
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

VerifyEmail.propTypes = {
  verifyEmail: PropTypes.func,
  verifyEmailFailed: PropTypes.func,
  verifyError: PropTypes.any,
  user: PropTypes.any,
}

const mapStatetoProps = state => {
  const { user, verifyError, loading } = state.Verify
  return { user, verifyError, loading }
}

export default connect(mapStatetoProps, {
  verifyEmail,
  apiError,
  verifyEmailFailed,
})(VerifyEmail)