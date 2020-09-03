class Api {
  _url = 'http://localhost:3004';

  getApartaments = async () => {
    const data = await fetch(`${this._url}/apartaments`);
    const res = await data.json();

    return res;
  }
}

export default new Api();