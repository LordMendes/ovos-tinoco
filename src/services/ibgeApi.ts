import axios from "axios";

export async function getBrazilStates() {
  const response = axios
    .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => res.data)
    .catch(() => []);
  return response;
}

export async function getCitiesFromUf(ufID: string) {
  const response = axios
    .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufID}/municipios`)
    .then((res) => res.data)
    .catch(() => []);
  return response;
}
