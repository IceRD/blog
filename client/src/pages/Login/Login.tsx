import { FC } from 'react'
import { Input, Button, ButtonLink, Box, Typography } from '~/ui'
import { Link } from 'react-router-dom'
import { REGISTRATION_ROUTE } from '~/router/constants'

const Login: FC = () => {
    return (
        <Box className="w-80">
            <Typography variant="h3" className="text-center font-semibold">
                Авторизация
            </Typography>

            <form>
                <Input
                    name="login"
                    placeholder="Логин"
                    type="text"
                    className="pb-4"
                />
                <Input
                    name="password"
                    placeholder="Пароль"
                    type="password"
                    className="pb-4"
                />
                <Button block className="mb-4">
                    Войти
                </Button>

                <Link to={REGISTRATION_ROUTE}>
                    <ButtonLink block>Регистрация</ButtonLink>
                </Link>
            </form>
        </Box>
    )
}

export default Login
