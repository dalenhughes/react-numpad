import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import NumPad from '../lib';
import Modal from './DemoModal';
import moment from 'moment';

const appointmentDates = {
  [moment().format('DD.MM.YYYY')]: [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
  ],
  [moment()
    .add(1, 'days')
    .format('DD.MM.YYYY')]: [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
  ],
  [moment()
    .add(3, 'days')
    .format('DD.MM.YYYY')]: [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '12:00',
    '13:00',
    '13:30',
    '14:00',
    '15:00',
  ],
  [moment()
    .add(4, 'days')
    .format('DD.MM.YYYY')]: ['08:00', '08:30', '09:00', '09:30'],
  [moment()
    .add(6, 'days')
    .format('DD.MM.YYYY')]: ['08:00', '08:30', '09:00', '09:30', '10:00', '11:00'],
  [moment()
    .add(10, 'days')
    .format('DD.MM.YYYY')]: [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
  ],
  [moment()
    .add(11, 'days')
    .format('DD.MM.YYYY')]: ['08:00', '08:30', '09:00', '09:30'],
  [moment()
    .add(12, 'days')
    .format('DD.MM.YYYY')]: [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '13:30',
    '14:00',
    '15:00',
  ],
  [moment()
    .add(13, 'days')
    .format('DD.MM.YYYY')]: ['08:00', '08:30', '09:00', '09:30', '10:00', '11:00'],
  [moment()
    .add(18, 'days')
    .format('DD.MM.YYYY')]: ['08:00', '08:30', '09:00', '09:30'],
  [moment()
    .add(20, 'days')
    .format('DD.MM.YYYY')]: [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
  ],
  [moment()
    .add(21, 'days')
    .format('DD.MM.YYYY')]: [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '12:00',
    '13:00',
    '13:30',
    '14:00',
    '15:00',
  ],
  [moment()
    .add(31, 'days')
    .format('DD.MM.YYYY')]: [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
  ],
};

storiesOf('NumPad', module)
  .add('Popover', () => [
    <div key="story-999" style={{ marginTop: '100px' }}>
      <ul style={{ height: '100px', width: '200px', padding: 0 }}>
        <NumPad.Popover
          style={{ fontSize: '10px' }}
          key="number-1"
          placeholder=""
          theme="orange"
          onChange={value => {
            console.log('value', value);
          }}
          label="Beauty"
          sync
          position="centerRight"
          arrow="left"
          qtyIncrement={5}
          isDecimal
          decimalSeparator=","
          max={10}
          min={5}
        >
          <li>
            <input type="text" placeholder="" />
          </li>
        </NumPad.Popover>
        <NumPad.Popover
          style={{ fontSize: '10px' }}
          key="number-1"
          placeholder=""
          theme="orange"
          onChange={value => {
            console.log('value', value);
          }}
          label="Beauty"
          sync
          isDecimal
          position="centerRight"
        >
          <li>
            <input type="text" placeholder="" />
          </li>
        </NumPad.Popover>
        <NumPad.Popover
          style={{ fontSize: '10px' }}
          key="number-1"
          placeholder=""
          theme="orange"
          onChange={value => {
            console.log('value', value);
          }}
          label="Beauty"
          sync
          isDecimal
          position="centerRight"
        >
          <li>
            <input type="text" placeholder="" />
          </li>
        </NumPad.Popover>
        <NumPad.Popover
          style={{ fontSize: '10px' }}
          key="number-1"
          placeholder=""
          theme="orange"
          onChange={value => {
            console.log('value', value);
          }}
          label="Beauty"
          sync
          isDecimal
          position="centerRight"
        >
          <li>
            <input type="text" placeholder="" />
          </li>
        </NumPad.Popover>
        <NumPad.Popover
          style={{ fontSize: '10px' }}
          key="number-1"
          placeholder=""
          theme="orange"
          onChange={value => {
            console.log('value', value);
          }}
          label="Beauty"
          sync
          isDecimal
          position="centerRight"
        >
          <li>
            <input type="text" placeholder="" />
          </li>
        </NumPad.Popover>
        <NumPad.Popover
          style={{ fontSize: '10px' }}
          key="number-1"
          placeholder=""
          theme="orange"
          onChange={value => {
            console.log('value', value);
          }}
          label="Beauty"
          sync
          isDecimal
          position="centerRight"
        >
          <li>
            <input type="text" placeholder="" />
          </li>
        </NumPad.Popover>
        <NumPad.Popover
          style={{ fontSize: '10px' }}
          key="number-1"
          placeholder=""
          theme="orange"
          onChange={value => {
            console.log('value', value);
          }}
          label="Beauty"
          sync
          isDecimal
          position="centerRight"
        >
          <li>
            <input type="text" placeholder="" />
          </li>
        </NumPad.Popover>
        <NumPad.Popover
          style={{ fontSize: '10px' }}
          key="number-1"
          placeholder=""
          theme="orange"
          onChange={value => {
            console.log('value', value);
          }}
          label="Beauty"
          sync
          isDecimal
          position="centerRight"
          arrow={'left'}
        >
          <li>
            <input type="text" placeholder="" />
          </li>
        </NumPad.Popover>
      </ul>
      <br />
    </div>,
  ])
  .add('Rooney', () => [
    <div key="story-998" style={{ marginBottom: '0' }}>
      <ul style={{ height: '100px', padding: 0 }}>
        <li>
          <NumPad.RooneyInteger
            style={{ fontSize: '10px' }}
            key="number-1"
            placeholder=""
            theme="orange"
            onChange={value => {
              console.log('value', value);
            }}
            label="Beauty"
            sync
            isDecimal
            position="endBottomRight"
          >
            <input type="text" placeholder="" />
          </NumPad.RooneyInteger>
        </li>
        <li>
          <NumPad.RooneyInteger
            style={{ fontSize: '10px' }}
            key="number-1"
            placeholder=""
            theme="orange"
            onChange={value => {
              console.log('value', value);
            }}
            label="Beauty"
            sync
            position="endBottomRight"
          >
            <input type="text" placeholder="" />
          </NumPad.RooneyInteger>
        </li>
        <li>
          <NumPad.RooneyInteger
            style={{ fontSize: '10px' }}
            key="number-1"
            placeholder=""
            theme="orange"
            onChange={value => {
              console.log('value', value);
            }}
            label="Beauty"
            sync
            position="endBottomRight"
          >
            <input type="text" placeholder="" />
          </NumPad.RooneyInteger>
        </li>
        <li>
          <NumPad.RooneyInteger
            style={{ fontSize: '10px' }}
            key="number-1"
            placeholder=""
            theme="orange"
            onChange={value => {
              console.log('value', value);
            }}
            label="Beauty"
            sync
            position="endBottomRight"
          >
            <input type="text" placeholder="" />
          </NumPad.RooneyInteger>
        </li>
        <li>
          <NumPad.RooneyInteger
            style={{ fontSize: '10px' }}
            key="number-1"
            placeholder=""
            theme="orange"
            onChange={value => {
              console.log('value', value);
            }}
            label="Beauty"
            sync
            position="endBottomRight"
          >
            <input type="text" placeholder="" />
          </NumPad.RooneyInteger>
        </li>
        <li>
          <NumPad.RooneyInteger
            style={{ fontSize: '10px' }}
            key="number-1"
            placeholder=""
            theme="orange"
            onChange={value => {
              console.log('value', value);
            }}
            label="Beauty"
            sync
            position="endBottomRight"
          >
            <input type="text" placeholder="" />
          </NumPad.RooneyInteger>
        </li>
        <li>
          <NumPad.RooneyInteger
            style={{ fontSize: '10px' }}
            key="number-1"
            placeholder=""
            theme="orange"
            onChange={value => {
              console.log('value', value);
            }}
            label="Beauty"
            sync
            position="endBottomRight"
          >
            <input type="text" placeholder="" />
          </NumPad.RooneyInteger>
        </li>
        <li>
          <NumPad.RooneyInteger
            style={{ fontSize: '10px' }}
            key="number-1"
            placeholder=""
            theme="orange"
            onChange={value => {
              console.log('value', value);
            }}
            label="Beauty"
            sync
            position="endBottomRight"
          >
            <input type="text" placeholder="" />
          </NumPad.RooneyInteger>
        </li>
        <li>
          <NumPad.RooneyInteger
            style={{ fontSize: '10px' }}
            key="number-1"
            placeholder=""
            theme="orange"
            onChange={value => {
              console.log('value', value);
            }}
            label="Beauty"
            sync
            position="endBottomRight"
          >
            <input type="text" placeholder="" />
          </NumPad.RooneyInteger>
        </li>
        <li>
          <NumPad.RooneyInteger
            style={{ fontSize: '10px' }}
            key="number-1"
            placeholder=""
            theme="orange"
            onChange={value => {
              console.log('value', value);
            }}
            label="Beauty"
            sync
            position="endBottomRight"
          >
            <input type="text" placeholder="" />
          </NumPad.RooneyInteger>
        </li>
        <li>
          <NumPad.RooneyInteger
            style={{ fontSize: '10px' }}
            key="number-1"
            placeholder=""
            theme="orange"
            onChange={value => {
              console.log('value', value);
            }}
            label="Beauty"
            sync
            position="endBottomRight"
          >
            <input type="text" placeholder="" />
          </NumPad.RooneyInteger>
        </li>
        <li>
          <NumPad.RooneyInteger
            style={{ fontSize: '10px' }}
            key="number-1"
            placeholder=""
            theme="orange"
            onChange={value => {
              console.log('value', value);
            }}
            label="Beauty"
            sync
            position="endBottomRight"
          >
            <input type="text" placeholder="" />
          </NumPad.RooneyInteger>
        </li>
        <li>
          <NumPad.RooneyInteger
            style={{ fontSize: '10px' }}
            key="number-1"
            placeholder=""
            theme="orange"
            onChange={value => {
              console.log('value', value);
            }}
            label="Beauty"
            sync
            position="endBottomRight"
          >
            <input type="text" placeholder="" />
          </NumPad.RooneyInteger>
        </li>
        <li>
          <NumPad.RooneyInteger
            style={{ fontSize: '10px' }}
            key="number-1"
            placeholder=""
            theme="orange"
            onChange={value => {
              console.log('value', value);
            }}
            label="Beauty"
            sync
            position="endBottomRight"
          >
            <input type="text" placeholder="" />
          </NumPad.RooneyInteger>
        </li>
        <li>
          <NumPad.RooneyInteger
            style={{ fontSize: '10px' }}
            key="number-1"
            placeholder=""
            theme="orange"
            onChange={value => {
              console.log('value', value);
            }}
            label="Beauty"
            sync
            position="endBottomRight"
          >
            <input type="text" placeholder="" />
          </NumPad.RooneyInteger>
        </li>
        <li>
          <NumPad.RooneyInteger
            style={{ fontSize: '10px' }}
            key="number-1"
            placeholder=""
            theme="orange"
            onChange={value => {
              console.log('value', value);
            }}
            label="Beauty"
            sync
            position="endBottomRight"
          >
            <input type="text" placeholder="" />
          </NumPad.RooneyInteger>
        </li>
        <li>
          <NumPad.RooneyInteger
            style={{ fontSize: '10px' }}
            key="number-1"
            placeholder=""
            theme="orange"
            onChange={value => {
              console.log('value', value);
            }}
            label="Beauty"
            sync
            position="endBottomRight"
          >
            <input type="text" placeholder="" />
          </NumPad.RooneyInteger>
        </li>
      </ul>
      <br />
    </div>,
  ])
  .add('Input number', () => [
    <div key="story-1" style={{ marginBottom: '400px' }}>
      <p>daédlfkja adf acfadsf asdélfk ajsdaf sodalesasdf asf asdf af </p>
      <ChangeProps>
        <NumPad.Number
          style={{ fontSize: '10px' }}
          key="number-1"
          placeholder="test"
          theme="orange"
          onChange={value => {
            console.log('value', value);
          }}
          position="startBottomLeft"
          label="Totale"
          sync
        >
          <input type="text" placeholder="test" />
          <Button />
        </NumPad.Number>
      </ChangeProps>
    </div>,
    <LoremIpsum key="lorem" />,
    <NumPad.Date
      key="issue-1"
      onChange={value => {
        console.log('value', value);
      }}
      position="startTopLeft"
      placeholder="birthdate"
      dateFormat="DD.MM.YYYY"
    />,
    <NumPad.PositiveNumber
      key="number-2"
      onChange={value => {
        console.log('value', value);
      }}
      position="endBottomRight"
      label="Positive"
    />,
    <NumPad.IntegerNumber
      key="number-3"
      onChange={value => {
        console.log('value', value);
      }}
      position="flex-start"
      label="Integer"
    />,
    <NumPad.PositiveIntegerNumber
      key="number-4"
      onChange={value => {
        console.log('value', value);
      }}
      position="startBottomRight"
      label="Positive integer"
    />,
  ])
  .add('Time', () => [
    <NumPad.Time
      key="time-1"
      placeholder="HH:mm"
      label="Sveglia"
      onChange={value => console.log('changed', value)}
      sync
      value="12:33"
    />,
    <NumPad.Time
      key="time-2"
      theme="blackAndWhite"
      sync
      onChange={value => console.log('changed', value)}
    />,
    <LoremIpsum key="lorem" />,
  ])
  .add('Numpad date', () => [
    <NumPad.Date
      key="date-1"
      placeholder="D.M.Y"
      dateFormat="DD.MM.YYYY"
      label="Data di nascita"
      onChange={value => console.log('changed', value)}
      value="28.06.1986"
    />,
    <LoremIpsum key="lorem" />,
  ])
  .add('Numpad date time', () => [
    <NumPad.DateTime
      key="date-1"
      label="Data e ora"
      onChange={value => console.log('changed', value)}
    />,
    <NumPad.DateTime
      key="date-2"
      dateFormat="DD.MM.YYYY"
      onChange={value => console.log('changed', value)}
      value="28.06.1986 10:00"
    />,
    <LoremIpsum key="lorem" />,
  ])
  .add('Styled component', () => {
    const StyledNumber = styled(NumPad.Number)`
      color: green;
      button {
        color: red;
      }
      .numpad-input-value {
        input {
          border: 2px solid #333;
        }
        button {
          color: navy;
        }
      }
    `;
    return (
      <StyledNumber
        key="number-1"
        onChange={value => {
          console.log('value', value);
        }}
        sync
        label="Restilizzato"
      >
        <input type="text" />
      </StyledNumber>
    );
  });

storiesOf('Calendar', module)
  .add('Date US', () => [
    <NumPad.Calendar
      key="numpad-date"
      onChange={value => console.log('changed', value)}
      label="Birthdate"
      locale="en"
      dateFormat="MM/DD/YYYY"
      position="startBottomLeft"
      minDate="01/20/2018"
      maxDate="01/30/2018"
    >
      <input type="text" style={{ boder: '2px solid red', width: '300px' }} />
    </NumPad.Calendar>,
    <LoremIpsum key="lorem" />,
  ])
  .add('Date CH-IT', () => (
    <NumPad.Calendar
      label="data in italiano"
      dateFormat="DD.MM.YYYY"
      position="fullscreen"
      locale="it"
      onChange={value => console.log('value', value)}
    />
  ))
  .add('Events', () => (
    <NumPad.Appointment
      dateFormat="DD.MM.YYYY"
      dates={appointmentDates}
      locale="it"
      value="20.04.2018 10:00"
      position="startBottomLeft"
      onChange={value => console.log('value', value)}
    />
  ))
  .add('Events fullscreen', () => (
    <NumPad.Appointment
      dateFormat="DD.MM.YYYY"
      position="fullscreen"
      dates={appointmentDates}
      locale="it"
      onChange={value => console.log('value', value)}
    />
  ))
  .add('Inside modal', () => (
    <Modal>
      <h4>Test component inside a modal</h4>
      <NumPad.Number
        style={{ fontSize: '10px' }}
        key="number-1"
        placeholder="test"
        theme="orange"
        onChange={value => {
          console.log('value', value);
        }}
        position="startBottomLeft"
        label="Totale"
        value={10}
      >
        <input type="text" placeholder="test" />
        <Button />
      </NumPad.Number>
      <hr />
      <NumPad.Time
        key="time-2"
        theme="blackAndWhite"
        onChange={value => console.log('changed', value)}
      />
      <hr />
      <NumPad.Calendar
        onChange={value => console.log('changed', value)}
        label="Data di nascita"
        locale="it"
        dateFormat="DD.MM.YYYY"
        value="28.06.1986"
      />
      <hr />
      <NumPad.Calendar
        onChange={value => console.log('changed', value)}
        label="Markers"
        locale="it"
        dateFormat="DD.MM.YYYY"
        markers={['01.03.2018', '06.03.2018']}
      />
    </Modal>
  ));

class Button extends React.Component {
  render() {
    console.log('props', this.props);
    return <button {...this.props}>click me</button>;
  }
}

class ChangeProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }
  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              value: Math.floor(Math.random() * Math.floor(100)),
            })
          }
        >
          Gen new value
        </button>
        <div>
          {React.Children.map(this.props.children, child =>
            React.cloneElement(child, { value: this.state.value })
          )}
        </div>
      </div>
    );
  }
}

const LoremIpsum = () => (
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque nulla eget eros
    tempor porta. Fusce quis leo ante. Cras vestibulum tincidunt mi, consequat euismod augue congue
    ac. Curabitur nulla neque, hendrerit nec est eu, gravida dignissim quam. Sed tincidunt finibus
    orci, sit amet condimentum metus ullamcorper ut. Suspendisse odio tortor, pretium vitae nisl ac,
    cursus iaculis odio. Suspendisse rhoncus dui commodo ligula facilisis, ut condimentum metus
    volutpat. Praesent bibendum venenatis ornare. Praesent eu luctus lacus, et varius nibh. Aliquam
    elit lectus, egestas ut sagittis gravida, consectetur quis justo. Fusce sed gravida est.
    Phasellus lectus tellus, fringilla sit amet ipsum ac, volutpat pharetra ipsum. Aenean lorem
    turpis, luctus a ullamcorper sit amet, mattis in leo. Suspendisse potenti. Nunc consequat quam
    eu commodo pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent
    finibus massa vel mattis efficitur. In auctor dictum ante, non tincidunt augue laoreet a. Fusce
    quis maximus sem, sed congue ante. Praesent imperdiet elit at nisi pulvinar tincidunt. Sed sed
    volutpat libero, eget placerat mauris. Sed bibendum leo ligula, sit amet hendrerit arcu iaculis
    rhoncus. Proin porta ligula magna, ac commodo tortor lobortis vitae. Nulla et massa vulputate,
    pellentesque nisi sit amet, venenatis erat. Sed nisi ex, mollis sit amet vestibulum a, efficitur
    eget nulla. Sed vulputate ligula sed mauris facilisis laoreet. Donec facilisis id eros nec
    facilisis. Phasellus laoreet sem vitae lorem cursus, eget consequat leo condimentum. Vivamus
    consequat sapien at mattis luctus. Nulla varius, felis a hendrerit pulvinar, magna augue tempor
    sem, cursus convallis urna erat ut leo. Quisque aliquam turpis ante, at venenatis nibh suscipit
    et. Integer scelerisque mollis tristique. Praesent sed lorem et lorem lobortis tristique. Nam
    venenatis at nibh id accumsan. Cras ultricies massa id pharetra venenatis. In ac efficitur nunc.
    Phasellus eu diam commodo sapien finibus posuere. Phasellus vel eros elit. Curabitur accumsan
    velit ac elit tincidunt, a efficitur mauris imperdiet. Suspendisse a scelerisque lacus. Praesent
    at elit quis tellus lacinia ornare. Nunc vehicula pharetra nulla a iaculis. Vestibulum eleifend
    accumsan vestibulum. Donec id nibh eleifend, rhoncus risus ac, vulputate erat. Quisque eleifend
    imperdiet tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
    cubilia Curae; Curabitur ullamcorper, nisl sit amet venenatis lobortis, nunc nibh dictum metus,
    sed congue neque diam at diam. Nunc sem dui, laoreet non ante ac, consectetur pellentesque dui.
    Phasellus congue dignissim metus, et tempus ex blandit et. Aliquam elementum, leo quis gravida
    vehicula, justo neque porttitor tortor, eget volutpat sem lacus id lorem. Vestibulum ante ipsum
    primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc tortor tellus, fermentum
    vitae volutpat vitae, placerat ut lorem. Proin malesuada varius diam quis tempus. Fusce molestie
    massa ut turpis facilisis, ac ornare ligula cursus. Aliquam ligula ligula, maximus eu mattis
    elementum, tempor vel sapien. Nullam sit amet metus vitae ante ornare pharetra a id nibh.
    Suspendisse consectetur libero ante, id sodales lacus varius eu. Sed vehicula vulputate auctor.
    Quisque varius diam dui, at sollicitudin felis fringilla in. Pellentesque habitant morbi
    tristique senectus et netus et malesuada fames ac turpis egestas. Ut a consectetur ligula.
    Curabitur commodo maximus massa quis aliquam.
  </div>
);
