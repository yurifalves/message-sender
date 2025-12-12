interface LocationResponse {
  ip: string;
  location: {
    city: string;
    continent: string;
    continent_code: string;
    country: string;
    country_code: string;
    is_in_european_union: boolean;
    latitude: string;
    locale_code: string;
    longitude: string;
    metro_code: string;
    region: string;
    region_code: string;
    time_zone: string;
  };
  network: {
    autonomous_system_number: string;
    autonomous_system_organization: string;
    network: string;
  };
  security: {
    proxy: boolean;
    relay: boolean;
    tor: boolean;
    vpn: boolean;
  };
}

async function getServerIPv4(): Promise<string> {
  const response: Response = await fetch("https://api4.ipify.org");
  if (!response.ok) throw new Error("Erro ao obter IPv4.");
  const ipv4: string = await response.text();
  return ipv4;
}

async function getServerIPv6(): Promise<string> {
  const response: Response = await fetch('https://api6.ipify.org');
  if (!response.ok) throw new Error("Erro ao obter IPv6.");
  const ipv6: string = await response.text();
  return ipv6;
}

async function getLocation(ipAddress: string): Promise<LocationResponse> {
  const apiKey: string = '72050ebbf7134d2a8411394a1eb321b0';
  const response: Response = await fetch(`https://vpnapi.io/api/${ipAddress}?key=${apiKey}`);
  if (!response.ok) throw new Error("Erro ao obter Localização.");
  return response.json();
}