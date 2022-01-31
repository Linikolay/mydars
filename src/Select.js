/**
 * Created by Nikolay on 11.01.2021.
 */
import React from "react";

function ArrowIcon() {
    return (
        <svg
            height="20"
            width="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
        >
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
        </svg>
    );
}

function Checkbox({ selected }) {
    if (selected) {
        return (
            <span className="checkmark selected">
        <span className="check" />
      </span>
        );
    }
    return <span className="checkmark blank" />;
}

function MenuItem({ label, selected, onClick, checkboxColor }) {
    return (
        <div className="menu-item" onClick={onClick}>
            <Checkbox selected={selected} checkboxColor={checkboxColor} />
            <span className="label">{label}</span>
        </div>
    );
}

function filterData(data, filter) {
    return data.filter(item => item.label.includes(filter));
}

function Select(props) {
    const { placeholder = "", options = [], checkboxColor, onChange } = props;
    const [allData, setAllData] = React.useState(options);
    const [dataToRender, setDataToRender] = React.useState(options);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(
        function setSelectedTherapistOnStore() {
            const selectedArr = allData.filter(item => item.selected);
            onChange(selectedArr);
        },
        [allData]
    );

    function handleSelectInputChange(e) {
        e.preventDefault();
        setDataToRender(filterData(allData.slice(), e.target.value));
    }

    function handleMenuItemOnClick(value) {
        setAllData(
            allData.map(item =>
                item.value == value ? { ...item, selected: !item.selected } : item
            )
        );
        setDataToRender(
            dataToRender.map(item =>
                item.value == value ? { ...item, selected: !item.selected } : item
            )
        );
    }

    function renderOptions(arr, handleMenuItemOnClick) {
        return arr.map((item, idx) => {
            return (
                <MenuItem
                    key={`select-menu-${idx}`}
                    value={item.value}
                    label={item.label}
                    checkboxColor={checkboxColor}
                    selected={item.selected}
                    onClick={() => handleMenuItemOnClick(item.value)}
                />
            );
        });
    }

    return (
        <div
            className="select-container"
            onMouseLeave={() => setIsMenuOpen(false)}
            onMouseEnter={() => setIsMenuOpen(true)}
        >
            <div className="select-box">
                <input
                    placeholder={placeholder}
                    className="placeholder"
                    onFocus={() => setIsMenuOpen(true)}
                    onChange={handleSelectInputChange}
                />
                <div className="icon">
                    <ArrowIcon />
                </div>
            </div>
            <div className="select-menu" style={{ opacity: isMenuOpen ? 1 : 0 }}>
                {renderOptions(dataToRender, handleMenuItemOnClick)}
            </div>
        </div>
    );
}

export default Select;
