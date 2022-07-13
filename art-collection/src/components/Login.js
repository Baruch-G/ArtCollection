import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircle from '@mui/icons-material/AccountCircle'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import FilledInput from '@mui/material/FilledInput'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const Login = ({ onLogin }) => {
  const navigate = useNavigate()

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    errVisible: false,
    userName: '',
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault()
  // }

  const logIn = (e) => {
    e.preventDefault()

    setUserObj(values.userName, values.password)

    console.log('loged in')
  }

  const setUserObj = async (userName, password) => {
    console.log(userName + ' ' + password)
    await fetch('http://localhost:5000/users')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        var resUser = data.find(
          (user) => user.id == userName && user.password == password,
        )
        if (resUser) {
          onLogin(resUser)
          navigate(`/`)
        } else {
          setValues({ ...values, errVisible: true })
        }
      })
  }

  return (
    <center>
      <Card style={cardStyle} sx={{ minWidth: 100 }}>
        <form style={gridStyle} onSubmit={logIn}>
          <div style={{ justifySelf: 'end' }}>
            <Link to="/">
              {' '}
              <FaTimes style={{ color: 'red', fontSize: 22 }} />
            </Link>
          </div>
          <CardContent>
            <h3>הזן שם משתמש וסיסמא</h3>
            <FormControl sx={{ m: 1, width: '50ch' }} variant="filled">
              <InputLabel htmlFor="filled-adornment">שם משתמש</InputLabel>
              <FilledInput
                id="filled-adornment"
                type="text"
                value={values.userName}
                onChange={handleChange('userName')}
                endAdornment={
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <br></br>
            <FormControl sx={{ m: 1, width: '50ch' }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">סיסמא</InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      //onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </CardContent>
          {values.errVisible && (
            <p
              style={{
                marginTop: -20,
                color: 'red',
              }}
            >
              שם משתמש או סיסמא אינם נכונים
            </p>
          )}
          <Button
            style={{ width: 300, backgroundColor: '#292929' }}
            type="submit"
            size="large"
            variant="contained"
            disabled={false}
          >
            התחבר
          </Button>

          <div
            style={{
              marginTop: 20,
              display: 'grid',
              gridTemplateColumns: '1fr 0.5fr 1fr',
            }}
          >
            <Link style={{ fontSize: 12 }} to="/@">
              שכחתי סיסמא
            </Link>
            <span style={{ marginTop: -3 }}>|</span>
            <Link style={{ fontSize: 12 }} to="/register">
              הירשם לאתר
            </Link>
          </div>
        </form>
      </Card>
    </center>
  )
}

const gridStyle = {
  display: 'grid',
  justifyItems: 'center',
}
const cardStyle = {
  marginTop: 20,
  width: 600,
  padding: 10,
}

export default Login
