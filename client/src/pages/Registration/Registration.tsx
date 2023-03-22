import { FC } from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_ROUTE } from '~/router/constants'
import { Input, Button, ButtonLink, Box, Typography } from '~/ui'

const Registration: FC = () => {
    return (
        <Box className="w-80">
            <Typography variant="h3" className="text-center font-semibold">
                Регистрация
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
                <Input
                    name="confirm_password"
                    placeholder="Подтвердите пароль"
                    type="password"
                    className="pb-4"
                />
                <Button block className="mb-4">
                    Войти
                </Button>

                <Link to={LOGIN_ROUTE}>
                    <ButtonLink block>Авторизация</ButtonLink>
                </Link>
            </form>
        </Box>
    )
}

export default Registration
