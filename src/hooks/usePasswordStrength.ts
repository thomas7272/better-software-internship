import { useEffect, useState } from 'react';

const usePasswordStrength = () => {
  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const getStrengthLabel = (strength: number) => {
    if (strength === 0) return 'Too weak';
    if (strength === 1) return 'Weak';
    if (strength === 2) return 'Fair';
    if (strength === 3) return 'Strong';
    return 'Very Strong';
  };

  const assessPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  return { passwordStrength, getStrengthLabel, assessPasswordStrength };
};

export default usePasswordStrength;
