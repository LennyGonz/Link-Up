const Auth_context = require("./Auth.context")

// @ponicode
describe("onLogin", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "George", "Edmond"], ["Anas", "Anas", "George"], ["George", "Edmond", "Anas"]]
        inst = new Auth_context.AuthProvider(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.onLogin("</s>")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onLogin("%}")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onLogin("new")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onLogin(",")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.onLogin("/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.onLogin(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Pierre Edouard", "Anas"], ["George", "Michael", "Jean-Philippe"], ["Anas", "Edmond", "Anas"]]
        inst = new Auth_context.AuthProvider(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
