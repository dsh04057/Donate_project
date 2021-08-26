import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  const [projects, setProjects] = useState<any>([]);

  useEffect(() => {
    let datas = [];
    for (let i = 0; i < 7; i++) {
      datas.push({
        desc: `프로젝트 계획`,
        name: `프로젝트 명 ${i + 1}`,
        money: Math.floor(Math.random() * 200000) + 100000,
      });
    }
    setProjects(datas);
  }, []);

  function addProject() {
    let data = {
      desc: `프로젝트 계획`,
      name: `프로젝트 명 ${projects.length + 1}`,
      money: Math.floor(Math.random() * 200000) + 100000,
    };
    setProjects([...projects, data]);
  }

  return (
    <div className="projects">
      {projects.map((project: any) => (
        <div className="project">
          <div className="desc">{project.desc}</div>
          <div className="name">{project.name}</div>
          <div className="money">목표 금액 : {project.money}</div>
        </div>
      ))}
      <div className="project" onClick={addProject}>
        <div className="add">Add Project</div>
      </div>
    </div>
  );
}

function LeftMenu() {
  return (
    <div className="menus">
      <div className="menu">
        <Link to="/">Home</Link>
      </div>
      <div className="menu">
        <Link to="/donate">Donate</Link>
      </div>
      <div className="menu">
        <Link to="/project">Project</Link>
      </div>
    </div>
  );
}

function RightMenu(){
  return (
      <Link to="/login">Login</Link>
  );
}

function Login(){
  return(
  <div className = "Login-Window">
    <div className="Wallet">QR</div>
    <div className="Wallet-imformation">세부 정보</div>
    <div className="deposit">입금</div>
    <div className="Withdraw">출금</div>
  
  <div className = "Myproject"></div>
    <div className = "myproject1">프로젝트1</div>
    <div className = "myproject2">프로젝트2</div>
    <div className = "myproject3">프로젝트3</div>
  </div>
  )
}

function Donate() {
  return (
    <div className="Donates">
        <div className="Donate-image">이미지</div>
        <div className="Donate-name">프로젝트 명</div>
        <div className="Donate-money1">목표 금액</div>
        <div className="Donate-money2">달성 금액</div>
        <div className="Donate-donate">후원하기</div>
    </div>
  )
}

function Project() {
  return (
  <div className="Enrollment">
        <div className="Enrollment-image">이미지</div>
        <div className="Enrollment-name">프로젝트 명</div>
        <div className="Enrollment-money">목표 금액</div>
        <div className="Enrollment-do">등록하기</div>
    </div>
  )
}


function App() {
  return (
    <Router>
      <div className="App">
        <div className="left-menu">
          <LeftMenu />
        </div>
        <div className="right-menu">
        <RightMenu />
        </div>
        <div className="content">
          <Switch>
            <Route path="/donate">
              <Donate />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          </div>

        <div className="R-content">
          <Switch>
          <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
