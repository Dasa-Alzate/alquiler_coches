import React, { useState } from "react";
import ConfigLayout from '../layouts/ConfigLayout';
import ConfigProfile from './ConfigPages/ConfigProfile';
import ConfigSecurity from './ConfigPages/ConfigSecurity';
import ConfigRental from './ConfigPages/ConfigRental';
import ConfigWallet from './ConfigPages/ConfigWallet';
import ConfigFavorites from './ConfigPages/ConfigFavorites';
import ConfigAccessibility from './ConfigPages/ConfigAccessibility';

const Configuracion = () => {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <ConfigLayout activeSection={activeSection} setActiveSection={setActiveSection}>
      <ConfigProfile active={activeSection === "profile"} />
      <ConfigSecurity active={activeSection === "security"} />
      <ConfigRental active={activeSection === "rental"} />
      <ConfigWallet active={activeSection === "wallet"} />
      <ConfigFavorites active={activeSection === "favorites"} />
      <ConfigAccessibility active={activeSection === "accessibility"} />
    </ConfigLayout>
  );
};

export default Configuracion;
