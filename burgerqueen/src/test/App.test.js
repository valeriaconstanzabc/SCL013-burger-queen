import React from 'react'
import { shallow } from 'enzyme'
import Welcome from '../components/Welcome'
import TableButton from '../components/TableButton'
import Menu from '../components/Menu'
import InputClient from '../components/InputClient'
import Header from '../components/Header'
import Buttons from '../components/Buttons'
import Background from '../components/Background'

describe('Componente Welcome', () => {
    const welcome = shallow(<Welcome />)
    test('El componente Welcome existe', () => {
        expect(welcome.exists()).toBeTruthy()
    })
})

describe('Componente TableButton', () => {
    const tableButton = shallow(<TableButton />)
    test('El componente TableButton existe', () => {
        expect(tableButton.exists()).toBeTruthy()
    })
})

describe('Componente Menu', () => {
    const menu = shallow(<Menu />)
    test('El componente Menu existe', () => {
        expect(menu.exists()).toBeTruthy()
    })
})

describe('Componente InputClient', () => {
    const inputClient = shallow(<InputClient />)
    test('El componente TableButton existe', () => {
        expect(inputClient.exists()).toBeTruthy()
    })
})

describe('Componente Header', () => {
    const header = shallow(<Header />)
    test('El componente Header existe', () => {
        expect(header.exists()).toBeTruthy()
    })
})

describe('Componente Buttons', () => {
    const buttons = shallow(<Buttons />)
    test('El componente Buttons existe', () => {
        expect(buttons.exists()).toBeTruthy()
    })
})

describe('Componente Background', () => {
    const background = shallow(<Background />)
    test('El componente Background existe', () => {
        expect(background.exists()).toBeTruthy()
    })
})