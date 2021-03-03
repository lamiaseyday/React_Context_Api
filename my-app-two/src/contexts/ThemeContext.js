import React from "react";

//BookContext'i oluşturmuş olduk.
//bu iletmek istediğimiz veri için bi yol olmuş olcak.
export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isDarkTheme: true,
    dark: {bg: '#222529', txt: '#D65F5f', hover: 'rgba(231, 76, 60, 0.8)'},
    light: {bg: '#F8F9FA', txt: '#222529', hover: 'rgba(254, 209, 54, 0.8)'},
  }

  //tema rengini dinamik olarak değiştirmeyi sağlayan metod.
  changeTheme = () => {
    this.setState({isDarkTheme: !this.state.isDarkTheme})
  }

  render() {
    return (
        //veriyi this.state ile gönderiyorum.
        //...this.state ile state objemizi kopyalamış oluyoruz
        //bir obje olduğu içinde tekrar bi paranteze alıyoruz.
      <ThemeContext.Provider value={{...this.state, changeTheme:this.changeTheme}}>
          {/* child componentine ulaşması için children yazıyoruz. */}
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

//console.log(myContext);

export default ThemeContextProvider;
