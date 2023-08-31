import { useDispatch } from "react-redux";
import { filtersSlice } from "../../redux/filters";
import { Select, Space } from "antd";
import logo from "../../img/freetogame-logo.png";
import "./nav.css";
import { Filters } from "../../redux";

const Nav = ({ filters }: { filters: Filters }) => {
  const dispatch = useDispatch();

  const { setFilterCurrentValue } = filtersSlice.actions;
  const onSelectChangeHandler = (value: string, key: keyof Filters) => {
    dispatch(setFilterCurrentValue({ value, key }));
  };

  return (
    <nav className="nav">
      <img className="nav__logo" src={logo} alt="Логотип" />
      <Space className="nav__space">
        {Object.values(filters).map((filter) => (
          <Select
            key={filter.key}
            style={{ width: 150, backgroundColor: "#19191b" }}
            options={filter.options}
            allowClear
            placeholder={filter.placeholder}
            onChange={(values) => onSelectChangeHandler(values, filter.key)}
          ></Select>
        ))}
      </Space>
    </nav>
  );
};

export default Nav;
