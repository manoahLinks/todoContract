import {
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
  import { expect } from "chai";
  import { ethers } from "hardhat";

  describe("Todo contract Test", () => {

    const deployTodoContract = async () => {

        const Todo = await ethers.getContractFactory("TodoContract");
        const {getAllTodos, getTodo, addNewTodo, toggleIsDoneStatus, removeTodo} = await Todo.deploy();

        return {getAllTodos, getTodo, addNewTodo, toggleIsDoneStatus, removeTodo}
    }
    
    describe("getTodo function", () => {

        it("should get all todos", async () => {
            const {getAllTodos} = await loadFixture(deployTodoContract);

            expect(await getAllTodos.length).to.eq(0);
     
        })
    })

    describe("addNewTodo function", () => {

        it("should add two funcs together", async () => {
            const {addNewTodo, getTodo} = await loadFixture(deployTodoContract);

            await addNewTodo('manoah', "chilling");

            expect((await getTodo(0)).title).to.equal("manoah");
            expect((await getTodo(0)).description).to.equal("chilling");
            
        })
    })

  })