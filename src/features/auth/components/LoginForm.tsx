import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import { useLoginForm } from '../hooks/useLoginForm';

export const LoginForm: FC = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    formError,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useLoginForm();

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Stack spacing={3}>
        <Stack spacing={0.5}>
          <Typography variant="h5" textAlign="center">
            Вхід в адмін-панель
          </Typography>
          <Typography variant="body2" textAlign="center" color="text.secondary">
            Використайте свій робочий обліковий запис, щоб продовжити
          </Typography>
        </Stack>

        {formError && <Alert severity="error">{formError}</Alert>}

        <Stack spacing={2}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={values.email}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            autoComplete="email"
          />

          <TextField
            label="Пароль"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            value={values.password}
            onChange={handleChange('password')}
            onBlur={handleBlur('password')}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <FormControlLabel
            control={<Checkbox checked={values.rememberMe} onChange={handleChange('rememberMe')} />}
            label="Запам’ятати мене"
          />
        </Stack>

        <Button type="submit" variant="contained" size="large" fullWidth disabled={isSubmitting}>
          {isSubmitting ? 'Вхід...' : 'Увійти'}
        </Button>
      </Stack>
    </Box>
  );
};
