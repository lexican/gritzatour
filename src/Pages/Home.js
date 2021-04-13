import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import Right from "../assets/images/right.svg";

import Feature from "../assets/images/feature.svg";
import Feature2 from "../assets/images/feature2.svg";
import Feature3 from "../assets/images/feature3.svg";
import Feature4 from "../assets/images/feature4.png";

import Image2 from "../assets/images/image2.png";
import Image3 from "../assets/images/image3.png";
import Image4 from "../assets/images/image4.png";
import Image5 from "../assets/images/image5.png";

import Star from "../assets/images/star.svg";

import Image from "../assets/images/image.png";

import Twitter from "../assets/images/twitter.svg";
import Facebook from "../assets/images/facebook.svg";
import Instagram from "../assets/images/instagram.svg";
import LinkedIn from "../assets/images/linkedin.svg";
import Youtube from "../assets/images/youtube.svg";
import SideNavBar from "../components/Sidebar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div id="header" className="p-100">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" href="#">
              <img src={Logo} alt="logo"></img>
            </Link>
            <SideNavBar />
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Destination
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    About
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Partner
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link btn login" to="/">
                    Login
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link btn register special-btn" to="/">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="d-flex" id="inner-container">
            <div className="" id="left">
              <h4>Explore and Travel</h4>
              <div>
                <h6>Holiday finder</h6>
                <div>
                  <form>
                    <div className="d-flex">
                      <div class="form-group" className="mr-2">
                        <label>Location</label>
                        <select class="form-control">
                          <option>Location</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label>Activity</label>
                        <select class="form-control">
                          <option>Activity</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div class="form-group" className="mr-2">
                        <label>Grade</label>
                        <select class="form-control">
                          <option>Grade</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label>Date</label>
                        <input type="date" className="form-control"></input>
                      </div>
                    </div>
                  </form>
                </div>
                <button className="btn special-btn">Explore</button>
              </div>
            </div>
            <div className="" id="banner"></div>
          </div>
        </div>

        <div id="section1" className="p-100">
          <div className="row">
            <div className="col-md-6" id="banner"></div>
            <div className="col-md-6 inner">
              <div className="header">A new way to explore the world</div>
              <div className="text">
                For decades travellers have reached for Lonely Planet books when
                looking to plan and execute their perfect trip, but now, they
                can also let Lonely Planet Experiences lead the way
              </div>
              <button className="btn special-btn">Learn More</button>
            </div>
          </div>
        </div>

        <div className="p-100" id="section2">
          <div
            className="d-flex justify-content-between align-items-center"
            id="top"
          >
            <div className="header">Featured destinations</div>
            <div className="pri">
              view all <img src={Right} alt=""></img>
            </div>
          </div>
          <div id="feature">
            <div className="item">
              <img src={Feature}></img>
              <div className="inner-container">
                <div className="title">Raja Ampat</div>
                <div className="title2">Indonesia</div>
              </div>
            </div>
            <div className="item">
              <img src={Feature2}></img>
              <div className="inner-container">
                <div className="title">Fanjingshan</div>
                <div className="title2">China</div>
              </div>
            </div>
            <div className="item">
              <img src={Feature3}></img>
              <div className="inner-container">
                <div className="title">Vevey Switzerland</div>
                <div className="title2">Switzerland</div>
              </div>
            </div>
            <div className="item">
              <img src={Feature4}></img>
              <div className="inner-container">
                <div className="title">Skadar Montenegro</div>
                <div className="title2">Montenegro</div>
              </div>
            </div>
          </div>
        </div>

        <div id="section3" className="p-100">
          <div className="row">
            <div className="col-md-6 inner">
              <div className="header">Guides by Thousand Sunny</div>
              <div className="text">
                Packed with tips and advice from our on-the-ground experts, our
                city guides app (iOS and Android) is the ultimate resource
                before and during a trip.
              </div>
              <button className="btn special-btn">Download</button>
            </div>
            <div className="col-md-6" id="banner"></div>
          </div>
        </div>

        <div id="section4" className="p-100">
          <div
            className="d-flex justify-content-start align-items-center"
            id="top"
          >
            <div className="header">Testimonials</div>
          </div>
          <div className="row">
            <div className="col-md-6 inner">
              <div className="rating">
                <img src={Star}></img>
                <img src={Star}></img>
                <img src={Star}></img>
                <img src={Star}></img>
                <img src={Star}></img>
              </div>
              <div className="text">
                “Quisque in lacus a urna fermentum euismod. Integer mi nibh,
                dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit
                sit amet turpis nec”
              </div>
              <div>
                <div className="title">Edward Newgate</div>
                <div className="title2">Founder Circle</div>
              </div>
            </div>
            <div className="col-md-6" id="banner">
              <div className="inner-container"></div>
            </div>
          </div>
        </div>

        <div className="p-100" id="section5">
          <div
            className="d-flex justify-content-between align-items-center"
            id="top"
          >
            <div className="header">Trending Stories</div>
            <div className="pri">
              view all <img src={Right} alt=""></img>
            </div>
          </div>
          <div id="feature">
            <div className="item">
              <img src={Image2}></img>
              <div className="inner-container">
                <div className="title">
                  The many benefits of taking a healing holiday
                </div>
                <div className="title2">
                  ‘Helaing holidays’ are on the rise tohelp maximise your health
                  and happines...
                </div>
                <div className="pri">Read More</div>
              </div>
            </div>
            <div className="item">
              <img src={Image3}></img>
              <div className="inner-container">
                <div className="title">
                  The best Kyoto restaurant to try Japanese food
                </div>
                <div className="title2">
                  From tofu to teahouses, here’s our guide to Kyoto’s best
                  restaurants to visit...
                </div>
                <div className="pri">Read More</div>
              </div>
            </div>
            <div className="item">
              <img src={Image4}></img>
              <div className="inner-container">
                <div className="title">
                  Skip Chichen Itza and head to this remote Yucatan
                </div>
                <div className="title2">
                  It’s remote and challenging to get, but braving the jungle and
                  exploring these ruins without the...
                </div>
                <div className="pri">Read More</div>
              </div>
            </div>
            <div className="item">
              <img src={Image5}></img>
              <div className="inner-container">
                <div className="title">
                  Surf’s up at these beginner spots around the world
                </div>
                <div className="title2">
                  If learning to surf has in on your to- do list for a while,
                  the good news is: it’s never too late...
                </div>
                <div className="pri">Read More</div>
              </div>
            </div>
          </div>
        </div>

        <div id="footer" className="p-100">
          <div className="row">
            <div className="col-md-6">
              <img src={Logo} alt="logo" className="logo"></img>
              <div className="mb-4">
                Plan and book your perfect trip with expert advice, travel tips
                destination information from us
              </div>
              <div className="copyright">
                A project by 
                <a
                  target="_blank"
                  href="https://linkedin.com/in/adekunle-adeyemo-b7530718a
"
                >
                  Adeyemo Adekunle
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="title">Destination</div>
              <ul>
                <li>Africa</li>
                <li>Antarctica</li>
                <li>Asia</li>
                <li>Europe</li>
                <li>America</li>
              </ul>
            </div>
            <div className="col-md-2">
              <div className="title">Shop</div>
              <ul>
                <li>Destination Guides</li>
                <li>Pictorial & Gifts</li>
                <li>Special Offers</li>
                <li>Delivery Times</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="col-md-2">
              <div className="title">Intrest</div>
              <ul>
                <li>Adventure Travel</li>
                <li>Art And Culture</li>
                <li>Wildlife And Nature</li>
                <li>Family Holidays</li>
                <li>Food And Drink</li>
              </ul>
            </div>
          </div>

          <div id="socials">
            <div>
              <img src={Twitter}></img>
              <img src={Facebook}></img>
              <img src={Instagram}></img>
              <img src={LinkedIn}></img>
              <img src={Youtube}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
