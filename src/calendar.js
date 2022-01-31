import React, { Component } from "react";

import moment from "moment";

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      range: []
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(range) {
    console.log(range)
    this.setState({ range }, () => {
      const { range, events } = this.state;

      //   console.log(range[0].format('MM-DD HH:mm'));
      //   console.log(range[1].format('MM-DD HH:mm'));
      //   console.log({ events });

      let nextId = events[events.length - 1]
        ? events[events.length - 1].id + 1
        : 1;

      this.setState({
        events: [
          ...events,
          {
            id: nextId,
            start: range[0],
            end: range[1],
            color: ["black"][
              Math.floor(Math.random() * 4)
            ],
            content: `待完成事件-${nextId}`
          }
        ]
      });
    });
  }

  render() {
    const { events, range } = this.state;

    return (
      <div style={{ height: "100vh", overflow: "auto" }}>
          
        <EventCalender
          value={range}
          onChange={this.onChange}
          events={events}
          onEventTab={event => console.log("tab", event.id)}
          onEventEdit={event => console.log("edit", event.id)}
          onEventDelete={event =>
            this.setState({ events: events.filter(ev => ev.id !== event.id) })
          }
        />

      </div>
    );
  }
}

/**
 *
 *
 *  事件日历组件
 *
 *
 */
class EventCalender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverCell: null,
      selected: [],
      week: 1,
      showEditEvent: null
    };
    this.isCellActive = this.isCellActive.bind(this);
    this.momentAt = this.momentAt.bind(this);
    this.filterEvent = this.filterEvent.bind(this);
    this.onHideEventEdit = this.onHideEventEdit.bind(this);
    this.renderEvent = this.renderEvent.bind(this);
  }

  componentDidMount() {
    this.setState({
      week: moment()
        .endOf("day")
        .subtract(1, "day") // 默认是周日开始
        .week()
    });
  }

  // 本周的全部日期
  getDaysOfWeek(week) {
    let start = moment()
      .startOf("year")
      .startOf("week")
      .add(week - 1, "week")
      .add(1, "day"); // 默认是周日开始

    let ret = [start];

    for (let i = 1; i < 7; i++) {
      ret.push(moment(ret[ret.length - 1]).add(1, "day"));
    }
    return ret;
  }

  get cellWidth() {
    return this.props.cellWidth || 84;
  }
  get cellHeight() {
    return this.props.cellHeight || 30;
  }
  get cellTimeGap() {
    return this.props.cellTimeGap || 45;
  }

  // 按照半小时划分工作事件
  get times() {
    let startHour = 9,
      startMinute = 30,
      endHour = 19,
      endMinute = 30;

    let curr = moment()
        .hour(startHour)
        .minute(startMinute),
      end = moment()
        .hour(endHour)
        .minute(endMinute);

    let ret = [];

    while (curr.isBefore(end)) {
      ret.push(curr.format("HH:mm"));
      curr = moment(curr).add(this.cellTimeGap, "minute");
    }
    return ret;
  }

  // 当前星期对应的一周时间
  get days() {
    return this.getDaysOfWeek(this.state.week);
  }

  // 渲染一格
  renderCell(content, style = {}) {
    return (
      <div
        style={{
          width: this.cellWidth,
          height: this.cellHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...style
        }}
      >
        {content}
       
      </div>
    );
  }

  // 渲染时间列
  get renderTime() {
    return (
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          top: this.cellHeight * 1
        }}
      >
        {this.times.map(time => (
          <li style={{ flex: 1 }}>
            {this.renderCell(time, { color: "#888" })}
          </li>
        ))}
      </ul>
    );
  }

  // 渲染日期头
  get renderWeekDay() {
    const { week } = this.state;
    const iconStyle = {
      position: "absolute",
      top: 15,
      fontSize: 20,
      fontWeight: 600,
      color: "#888",
      cursor: "pointer"
    };

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative"
        }}
      >
        {this.days.map(m =>
          this.renderCell(this.renderMoment(m), {
            flexDirection: "column",
            height: this.cellHeight * 2
          })
        )}

        <span
          onClick={() =>
            this.setState({ week: week - 1 }, this.onHideEventEdit)
          }
          style={{
            ...iconStyle,
            left: -2
          }}
        >
          &lt;
        </span>
        <span
          onClick={() =>
            this.setState({ week: week + 1 }, this.onHideEventEdit)
          }
          style={{
            ...iconStyle,
            right: -2
          }}
        >
          &gt;
        </span>
      </div>
    );
  }
  // 渲染日期头的一格
  renderMoment(m) {
    const day = `周${["日", "一", "二", "三", "四", "五", "六"][m.day()]}`;
    const date = m.format("MM-DD");
    return (
      <>
        <h4 style={{ color: "#666" }}>{day}</h4>
        <span style={{ color: "#888" }}>{date}</span>
      </>
    );
  }

  // 渲染时间网格
  get renderGrids() {
    let rows = this.times.length,
      cols = this.days.length;

    let cells = [];

    for (let i = 0; i < rows - 1; i++) {
      let row = [];

      for (let j = 0; j < cols; j++) {
        row.push(
          <div
            onClick={() => this.onCell(i, j)}
            onMouseEnter={() => this.setState({ hoverCell: { i, j } })}
            onMouseLeave={() => this.setState({ hoverCell: null })}
            style={{
              cursor: "pointer",
          
              width: this.cellWidth,
              height: this.cellHeight,
              background: this.isCellActive(i, j) ? "#c2f3d799" : "#fff",
              borderBottom: "1px solid #f4f4f4bf",
              borderRight: "1px solid #f4f4f4bf",
              borderTop: i == 0 ? "1px solid #f4f4f4bf" : "none",
              borderLeft: j == 0 ? "1px solid #f4f4f4bf" : "none"
            }}
          >

{/* {console.log(this.renderTime)} */}
{this.renderTime}

          </div>
        );
      }

      cells.push(row);
    }
    return cells.map(row => (
      <div style={{ display: "flex", width: "100%" }}>{row}</div>
    ));
  }

  //   判断表格状态
  isCellActive(i, j) {
    const { hoverCell, selected } = this.state;

    if (hoverCell) {
      // hover
      if (hoverCell.i == i && hoverCell.j == j) return true;

      if (selected.length == 1) {
        // 起点
        if (selected[0].i == i && selected[0].j == j) return true;
        // 在首次选择和当前 hover 之间
        if (
          j == hoverCell.j &&
          selected[0].j == hoverCell.j &&
          i >= Math.min(selected[0].i, hoverCell.i) &&
          i <= Math.max(selected[0].i, hoverCell.i)
        ) {
          return true;
        }
      }
    }

    return false;
  }

  // 表格点击
  onCell(i, j) {
    const { selected } = this.state;
    const { onChange } = this.props;

    this.onHideEventEdit();

    switch (selected.length) {
      case 0:
      case 2:
        this.setState({ selected: [{ i, j }] });
        break;
      case 1:
        const first = this.state.selected[0];
        if (j == first.j) {
          this.setState(
            {
              selected:
                i >= first.i
                  ? [...selected, { i: i + 1, j }]
                  : [{ i, j }, { i: selected[0].i + 1, j: selected[0].j }]
            },
            () => {
              const { selected } = this.state;
              onChange(selected.map(pos => this.momentAt(pos.i, pos.j)));
            }
          );
        } else {
          this.setState({ selected: [{ i, j }] });
        }
        break;
    }
  }

  // 某个位置对应的 moment
  momentAt(i, j) {
    const date = this.days[j];
    const time = this.times[i];

    const [hour, minute] = time.split(":");
    const m = date.hour(parseInt(hour)).minute(parseInt(minute));

    return m;
  }

  // 某个 moment 对应的 cell
  cellAt(m) {
    let i, j;
    const date = m.date();
    const hour = m.hour();
    const minute = m.minute();
    for (let k = 0; k < this.days.length; k++) {
      if (date == this.days[k].date()) j = k;
    }

    if (j == undefined) return null;

    for (let k = 0; k < this.time.length; k++) {
      const arr = this.times[i].split(":");
      if (hour == parseInt(arr[0]) && minute == parseInt(arr[1])) i = k;
    }

    if (i == undefined) return null;

    return { i, j };
  }

  // 取消编辑
  onHideEventEdit() {
    const { showEditEvent } = this.state;
    if (showEditEvent) this.setState({ showEditEvent: null });
  }

  // 过滤出在当前周范围内的事件
  filterEvent(event) {
    return (
      moment.isMoment(event.start) &&
      event.start.isBetween(
        moment(this.days[0]).startOf("day"),
        moment(this.days[6]).endOf("day")
      )
    );
  }
  // 渲染事件
  get renderEvents() {
    const { events } = this.props;

    let eventDoms = [];

    events.filter(this.filterEvent).forEach(event => {
      const { start, end, content, color } = event;

      // 时间列的首个
      const [hour, minute] = this.times[0].split(":");
      const firstTime = moment(start)
        .hour(hour)
        .minute(minute)
        .second(0);

      const width = this.cellWidth;
      // 开始和结束时间的分钟差 / 每格时常
      const height =
        (end.diff(start, "minutes") / this.cellTimeGap) * this.cellHeight;
      // 开始和本周首个日期的天数差
      const left =
        moment(start)
          .startOf("day")
          .diff(this.days[0].startOf("day"), "days") * this.cellWidth;
      // 开始和本周首个时间的分钟差 / 每格时常
      const top =
        (moment(start).diff(firstTime, "minutes") / this.cellTimeGap) *
        this.cellHeight;

      // 组成样式
      const style = { width, height, left, top };

      eventDoms.push({ event, content, style, color });
    });

    return eventDoms.map(this.renderEvent);
  }

  //   渲染单个事件
  renderEvent({ event, content, color, style = {} }) {
    const { showEditEvent } = this.state;
    //  占据行数
    const lines = Math.floor(style.height ? style.height / this.cellHeight : 1);

    // 编辑按钮样式
    const editStyle = {
      flex: 1,
      color: "#fff",
      textAlign: "center",
      cursor: "pointer",
      borderRadius: 8,
      fontSize: 12,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };

    return (
      <div
        style={{
          position: "absolute",
          padding: 4,
          ...style
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 8,
            background: color
              ? `${color}33`
              : `repeating-linear-gradient(-45deg, #eff1f5 0, #eff1f5 25px, #f6f8fc 25px, #f6f8fc 50px)`,
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={() => this.props.onEventTab(event)}
          onContextMenu={e => {
            this.setState({ showEditEvent: event });
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <div
            style={{
              color: color || "#5b5b5b",
              width: "100%",
              overflow: "hidden",
              display: "-webkit-box",
              "-webkit-line-clamp": `${lines}`,
              "-webkit-box-orient": "vertical",
              textAlign: "center",
              padding: "0 2px"
            }}
          >
            {content}
          </div>

          {/* 操作菜单 */}
          {showEditEvent && showEditEvent.id == event.id ? (
            <div
              style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 4,
                right: 4,
                display: "flex",
                flexDirection: "column",
                background: "#99999966",
                borderRadius: 8
              }}
            >
              <span
                style={{
                  ...editStyle,
                  background: "#9cabf799",
                  marginBottom: 4
                }}
                onClick={e => {
                  e.stopPropagation();
                  this.props.onEventEdit(event);
                  this.onHideEventEdit();
                }}
              >
                编辑
              </span>
              <span
                style={{
                  ...editStyle,
                  background: "#f79cab99"
                }}
                onClick={e => {
                  e.stopPropagation();
                  this.props.onEventDelete(event);
                  this.onHideEventEdit();
                }}
              >
                删除
              </span>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {/* 渲染时间列 */}
          <div style={{ width: this.cellWidth, padding: 0 }}>
            {this.renderTime}
          </div>

          {/* 渲染表体 */}
          <div>
            {/* 渲染日期头 */}
            {this.renderWeekDay}

            <div style={{ position: " relative" }}>
              {/* 渲染时间网格 */}
           
              {this.renderGrids}

              {/* 渲染事件 */}
              {this.renderEvents}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
