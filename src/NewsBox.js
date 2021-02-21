import React, { Component } from "react";
import Article from "./Article";
import "./NewsBox.css";

const newsAPImain = "http://newsapi.org/v2/top-headlines?";
const apiKey = "&apiKey=f8d50294fffa4836a8c3bacb603f03c7";

const options = [
    { name: 'Canada', value: 'ca' },
    { name: 'English', value: 'en' },
];

class NewsBox extends Component {
    constructor(props) {
        super(props); 
        this.state = { 
            status: null,
            totalResults: 0,
            articles: [{
                source: {}
            }],
            message: null,
            error: null,
            category: "",
            country: "",
        };
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCategoryChange(event) { this.setState({ category: event.target.value }); }

    handleCountryChange(event) { this.setState ({ country: event.target.value}); }


    handleSubmit(event) {
        event.preventDefault();
        let request;
        let category = "&category=" + this.state.category;
        let country = "country=" + this.state.country;

        if (this.state.category === "") {
            request = new Request(newsAPImain + country + apiKey);
        } else {
            request = new Request(newsAPImain + country + category + apiKey);
        }

        fetch(request)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        status: result["status"],
                        totalResults: result["totalResults"],
                        articles: result["articles"],
                        message: result["message"],
                    });
                },
                (error) => {
                    this.setState({
                        error: error,
                    });
                }
            );
    }

    componentDidMount() {
        let request;
        request = new Request(newsAPImain + "country=ca" + apiKey);
        fetch(request)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        status: result["status"],
                        totalResults: result["totalResults"],
                        articles: result["articles"],
                        message: result["message"],
                    });
                },
                (error) => {
                    this.setState({
                        error: error,
                    });
                }
            );
    }

    
    render() {
        const {articles, error, status, category, country} = this.state;
        
        if (error != null || status === "error") {
            return (
                <div className = "error">
                    Something went wrong: {this.state.message}
                </div>
            );
        } else {
            return (
                <div className="module-news">
                    <form className="category" onSubmit={this.handleSubmit}>
                    <label className="category">
                            Category: &nbsp;
                        <select value={category} onChange={this.handleCategoryChange}>            
                            <option value="business">business</option>
                            <option value="entertainment">entertainment</option>
                            <option value="general">general</option>
                            <option value="health">health</option>
                            <option value="science">science</option>
                            <option value="sports">sports</option>
                            <option value="technology">technology</option>
                        </select>
                    </label>
                        <input className="category" type="submit" value="Submit" />
                    </form>

                    <form className="country" onSubmit={this.handleSubmit}>
                        <label className="country">
                            Country: &nbsp;
                            <select value={country} onChange={this.handleCountryChange}>
                                <option value="ae">United Arab Emirates</option>
                                <option value="ar"> Argentina </option>
                                <option value="at"> Austria </option> 
                                <option value="au"> Australia </option> 
                                <option value="be"> Belgium </option>
                                <option value="bg"> Bulgaria </option>
                                <option value="br"> Brazil </option>
                                <option value="ca">Canada</option>
                                <option value="ch"> Switzerland </option>
                                <option value="cn"> China </option>
                                <option value="co"> Colombia </option>
                                <option value="cu"> Cuba </option>
                                <option value="cz"> Czechia </option>
                                <option value="de"> Germany </option>
                                <option value="eg"> Egypt </option>
                                <option value="fr"> France </option>
                                <option value="gb"> UK </option>
                                <option value="gr"> Greece </option>
                                <option value="hk"> Hong Kong </option>
                                <option value="hu"> Hungary </option>
                                <option value="id"> Indonesia </option>
                                <option value="ie"> Ireland </option>
                                <option value="il"> Israel </option>
                                <option value="in"> India </option>
                                <option value="it"> Italy </option>
                                <option value="jp"> Japan </option>
                                <option value="kr"> Korea </option>
                                <option value="lt"> Lithuania </option>
                                <option value="lv"> Latvia </option>
                                <option value="ma"> Morocco </option>
                                <option value="mx"> Mexico </option>
                                <option value="my"> Malaysia </option>
                                <option value="ng"> Nigeria </option>
                                <option value="nl"> Netherlands </option>
                                <option value="no"> Norway </option>
                                <option value="nz"> New Zealand </option>
                                <option value="ph"> Philippines </option>
                                <option value="pl"> Poland </option>
                                <option value="pt"> Portugal </option>
                                <option value="ro"> Romania </option>
                                <option value="rs"> Serbia </option>
                                <option value="ru"> Russia </option>
                                <option value="sa"> Saudi Arabia </option>
                                <option value="se"> Sweden </option>
                                <option value="sg"> Singapore </option>
                                <option value="si"> Slovenia </option>
                                <option value="sk"> Slovakia </option>
                                <option value="th"> Thailand </option>
                                <option value="tr"> Turkey </option>
                                <option value="tw"> Taiwan </option>
                                <option value="ua"> Ukraine </option>
                                <option value="us"> US </option>
                                <option value="ve"> Venezuela  </option>
                                <option value="za"> South Africa </option>
                            </select>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>

                   
                    <div className="articles">
                        {articles.map((article) => (<Article key={article["url"]} article={article} />))}
                    </div>
                    
                    
                </div>
            );
            
        }
    }
}

export default NewsBox;

