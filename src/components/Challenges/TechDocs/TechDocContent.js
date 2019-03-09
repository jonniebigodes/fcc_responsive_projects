import React from "react"

import "../../../assets/css/DocsTheme.css"

const DocsContents = () => (
  <main id="main-doc" className="athelas bg-near-white">
    <section
      className="main-section mh5 mt3 mb6 f4 lh-copy measure-wide"
      id="Introduction"
    >
      <header className="f2 georgia">Introduction</header>
      <article className="">
        <p className="f4 lh-copy  measure-wide">
          A finite-state machine (FSM) or finite-state automaton (FSA, plural:
          automata), finite automaton, or simply a state machine, is a
          mathematical model of computation.
        </p>
        <p className="f4 lh-copy  measure-wide">
          It is an abstract machine that can be in exactly one of a finite
          number of states at any given time. The FSM can change from one state
          to another in response to some external inputs; the change from one
          state to another is called a transition.
        </p>
        <p className="f4 lh-copy  measure-wide">
          An FSM is defined by a list of its states, its initial state, and the
          conditions for each transition. Finite state machines are of two types
          – deterministic finite state machines and non-deterministic finite
          state machines. A deterministic finite-state machine can be
          constructed equivalent to any non-deterministic one.
        </p>
        <p className="f4 lh-copy  measure-wide">
          The behavior of state machines can be observed in many devices in
          modern society that perform a predetermined sequence of actions
          depending on a sequence of events with which they are presented.
        </p>
        <p className="f4 lh-copy  measure-wide">
          Simple examples are vending machines, which dispense products when the
          proper combination of coins is deposited, elevators, whose sequence of
          stops is determined by the floors requested by riders, traffic lights,
          which change sequence when cars are waiting, and combination locks,
          which require the input of combination numbers in the proper order.
        </p>
        <p className="f4 lh-copy  measure-wide">
          The finite state machine has less computational power than some other
          models of computation such as the Turing machine. The computational
          power distinction means there are computational tasks that a Turing
          machine can do but a FSM cannot. This is because a FSM&apos;s memory is
          limited by the number of states it has. FSMs are studied in the more
          general field of automata theory.
        </p>
      </article>
    </section>
    <section
      className="main-section mh5 mt3 mb6 f4 lh-copy  measure-wide"
      id="Example_of_a_Finite_State_Machine"
    >
      <header className="f2 georgia">Example of a Finite State Machine</header>
      <article className="">
        <p className="f4 lh-copy  measure-wide">
          An example of a simple mechanism that can be modeled by a state
          machine is a turnstile.
        </p>
        <p className="f4 lh-copy  measure-wide">
          A turnstile, used to control access to subways and amusement park
          rides, is a gate with three rotating arms at waist height, one across
          the entryway. <br />
          Initially the arms are locked, blocking the entry, preventing patrons
          from passing through.
        </p>
        <p className="f4 lh-copy  measure-wide">
          Depositing a coin or token in a slot on the turnstile unlocks the
          arms, allowing a single customer to push through.
          <br /> After the customer passes through, the arms are locked again
          until another coin is inserted.
        </p>
        <p className="f4 lh-copy  measure-wide">
          Considered as a state machine, the turnstile has two possible states:{" "}
          <span style={{ fontWeight: 800 }}>Locked</span> and{" "}
          <span style={{ fontWeight: 800 }}>Unlocked</span>.
        </p>
        <p className="f4 lh-copy  measure-wide">
          There are two possible inputs that affect its state: putting a coin in
          the slot (<span style={{ fontWeight: 800 }}>coin</span>) and pushing
          the arm (<span style={{ fontWeight: 800 }}>push</span>).
          <br />
          In the locked state, pushing on the arm has no effect; no matter how
          many times the input push is given, it stays in the locked state.
        </p>
        <p className="f4 lh-copy  measure-wide">
          Putting a coin in – that is, giving the machine a coin input – shifts
          the state from Locked to Unlocked. <br />
          In the unlocked state, putting additional coins in has no effect; that
          is, giving additional coin inputs does not change the state. <br />
          However, a customer pushing through the arms, giving a push input,
          shifts the state back to Locked.
        </p>
        <p className="f4 lh-copy  measure-wide">
          The turnstile state machine can be represented by a{" "}
          <a
            href="https://en.wikipedia.org/wiki/State_transition_table"
            rel="noopener"
          >
            state transition table
          </a>
          , showing for each possible state, the transitions between them (based
          upon the inputs given to the machine) and the outputs resulting from
          each input:
        </p>
        <div>
          <div className="pa4">
            <div className="overflow-auto">
              <table className="f6 w-100 mw8 center" cellSpacing="0">
                <thead>
                  <tr>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                      Current State
                    </th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                      Input
                    </th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                      Next State
                    </th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                      Output
                    </th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  <tr>
                    <td className="pv3 pr3 bb b--black-20">Locked</td>
                    <td className="pv3 pr3 bb b--black-20">coin or push</td>
                    <td className="pv3 pr3 bb b--black-20">
                      Unlocked or Locked
                    </td>
                    <td className="pv3 pr3 bb b--black-20">
                      Unlocks the turnstile so that the customer can push
                      through.
                    </td>
                  </tr>
                  <tr>
                    <td className="pv3 pr3 bb b--black-20">Unlocked</td>
                    <td className="pv3 pr3 bb b--black-20">coin or push</td>
                    <td className="pv3 pr3 bb b--black-20">
                      Unlocked or Locked
                    </td>
                    <td className="pv3 pr3 bb b--black-20">
                      When the customer has pushed through, locks the turnstile
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="f4 lh-copy  measure-wide">
          The turnstile state machine can also be represented by a directed
          graph called a{" "}
          <a href="https://en.wikipedia.org/wiki/State_diagram">
            <span style={{ fontWeight: 800 }}>state diagram</span>
          </a>
          . <br />
          Each state is represented by a node (circle). <br />
          Edges (arrows) show the transitions from one state to another. <br />
          Each arrow is labeled with the input that triggers that transition.{" "}
          <br />
          An input that doesn&apos;t cause a change of state (such as a coin input in
          the Unlocked state) is represented by a circular arrow returning to
          the original state. <br />
          The arrow into the Locked node from the black dot indicates it is the
          initial state.
        </p>
      </article>
    </section>
    <section
      className="main-section mh5 mt3 mb6 f4 lh-copy measure-widee"
      id="Concepts_and_terminology"
    >
      <header className="f2 georgia">Concepts and terminology</header>
      <article className="">
        <p className="f4 lh-copy  measure-wide">
          A state is a description of the status of a system that is waiting to
          execute a transition. <br />
        </p>
        <p className="f4 lh-copy  measure-wide">
          A transition is a set of actions to be executed when a condition is
          fulfilled or when an event is received.{" "}
        </p>
        <p className="f4 lh-copy  measure-wide">
          For example, when using an audio system to listen to the radio (the
          system is in the &quotradio&quot state), receiving a &quotnext&quot stimulus results
          in moving to the next station.
        </p>
        <p className="f4 lh-copy  measure-wide">
          When the system is in the &quotCD&quot state, the &quotnext&quot stimulus results in
          moving to the next track.
        </p>
        <p className="f4 lh-copy  measure-wide">
          Identical stimuli trigger different actions depending on the current
          state.
        </p>
      </article>
    </section>
    <section
      id="Representations"
      className="main-section mh5 mt3 mb6 f4 lh-copy measure-wide"
    >
      <header className="f2 georgia">Representations</header>
      <article className="">
        <p className="f4 lh-copy  measure-wide">
          Below are some common representations of finite state machines:
        </p>
        <ul>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/State_transition_table"
              rel="noopener"
            >
              State/Event table
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Unified_Modeling_Language"
              rel="noopener"
            >
              UML state machines
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Specification_and_Description_Language">
              SDL state machines
            </a>
          </li>
        </ul>
      </article>
    </section>
    <section
      id="FSM_in_Nodejs_How_to"
      className="main-section mh5 mt3 mb6 f4 lh-copy measure-wide"
    >
      <header className="f2 georgia">FSM in Nodejs How to</header>
      <article className="">
        <p className="f4 lh-copy  measure-wide">
          Wondering how can this be used with Node.js?
        </p>
        <p className="f4 lh-copy  measure-wide">
          There&apos;s a way for that, a package called{" "}
          <a href="https://xstate.js.org" rel="noopener">
            XState
          </a>{" "}
          that allows the implementation of Finite State Machines in Node.js
        </p>
        <ul>
          <li>It&apos;s super simple to use</li>
          <li>
            Well documented and offers support for almost evey single frontend
            library aswell
          </li>
        </ul>
      </article>
    </section>
    <section
      id="XState_Super_Easy"
      className="main-section mh5 mt3 mb6 f4 lh-copy measure-wide"
    >
      <header className="f2 georgia">XState Super Easy</header>
      <article className="">
        <p className="f4 lh-copy  measure-wide">
          Suppose we want to model a{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
            rel="noopener"
          >
            Promise
          </a>{" "}
          as a state machine. First, install XState using NPM
        </p>
        <pre>
          <code className="language-bash">
            {`
              npm install xstate --save
            `}
          </code>
        </pre>
        <p className="f4 lh-copy  measure-wide">or Yarn:</p>
        <pre>
          <code className="language-bash">
            {`
              yarn add xstate
            `}
          </code>
        </pre>
        <p className="f4 lh-copy  measure-wide">
          Then, in your project, import Machine, which is a factory function
          that creates a state machine or statechart like so:
        </p>
        <br />
        <pre>
          <code className="language-javascript">
            {`
              import { Machine } from 'xstate';

              const promiseMachine = Machine(/* ... */);
            `}
          </code>
        </pre>
        <p className="f4 lh-copy  measure-wide">
          We&#39;ll pass the configuration inside the{" "}
          <code className="language-javascript">Machine(....)</code>. Since this
          will work in a hierarchical fashion.
        </p>
        <p className="f4 lh-copy  measure-wide">
          There&#39;s a need for the following items:
        </p>
        <ul>
          <li>
            <code>id</code> - to identify the machine and set the base string
            for its child state node{" "}
            <code className="language-javascript">IDs</code>
          </li>
          <li>
            <code>initial</code> - to specify the initial state node this
            machine should be in
          </li>
          <li>
            <code>states</code> - to define each of the child states:
          </li>
        </ul>
        <p className="f4 lh-copy  measure-wide">
          Transforming it into the following:
        </p>
        <br />
        <pre>
          <code className="language-javascript">
            {`
              import { Machine } from 'xstate';

              const promiseMachine = Machine({
                id: 'promise',
                initial: 'pending',
                states: {
                  pending: {},
                  resolved: {},
                  rejected: {}
                }
              });
            `}
          </code>
        </pre>
        <p className="f4 lh-copy  measure-wide">
          Then we need to add some interactions and mark the resolved and
          unresolved state nodes as a final state node.
          <br />
          since the promise machine terminates running once it reaches those
          states:
        </p>
        <p className="f4 lh-copy measure-wide">
          Transforming the machine representation into the following:
        </p>
        <pre>
          <code className="language-javascript">
            {`
              import { Machine } from 'xstate';

              const promiseMachine = Machine({
                id: 'promise',
                initial: 'pending',
                states: {
                  pending: {
                    on: {
                      RESOLVE: 'resolved',
                      REJECT: 'rejected'
                    }
                  },
                  resolved: {
                    type: 'final'
                  },
                  rejected: {
                    type: 'final'
                  }
                }
              });
            `}
          </code>
        </pre>
        <p className="f4 lh-copy measure-wide">
          To make node.js interpret the configuration so far and run the machine
          it´s necessary to add an interpreter.
          <br />
          That achieved throught the addition of the following snippet of code:
        </p>
        <pre>
          <code className="language-javascript">
            {`
              import { Machine, interpret } from 'xstate';

              const promiseMachine = Machine({
                    /* ... */
              });
                  
              const promiseService = interpret(promiseMachine).onTransition(state =>
                console.log(state.value)
              );
                  
              // Start the service
              promiseService.start();
              // => 'pending'
                  
              promiseService.send('RESOLVE');
              // => 'resolved'
            `}
          </code>
        </pre>
        <p className="f4 lh-copy measure-wide">
          {" "}
          And that&apos;s that. <br />
          We have now a running Finite State Machine, running in node.js
        </p>
      </article>
    </section>
    <section
      className="main-section mh5 mt3 mb6 f4 lh-copy measure-wide"
      id="XState_In_React"
    >
      <header className="f2 georgia">XState In React</header>
      <article className="">
        <p className="f4 lh-copy measure-wide">
          The most straightforward way of using XState with React is through
          local component state. <br />
          In general, given a machine definition:
        </p>
        <ul>
          <li>
            The machine is interpreted and its service instance is placed on the
            component instance
          </li>
          <li>
            For local state,{" "}
            <code className="language-javascript">this.state.current</code> will
            hold the current machine state. <br />
            You can use a property name other than .current.
          </li>
          <li>
            When the component is mounted, the service is started via{" "}
            <code className="language-javascript">this.service.start()</code>.
          </li>
          <li>
            When the component will unmount, the service is stopped via{" "}
            <code className="language-javascript">this.service.stop()</code>.
          </li>
          <li>
            Events are sent to the service via{" "}
            <code className="language-javascript">
              this.service.send(event)
            </code>
          </li>
        </ul>
      </article>
      <article className="">
        <p className="f4 fw6 lh-copy  measure-wide">
          Usage with Class Components
        </p>
        <p className="f4 lh-copy  measure-wide">
          Below is a simple class component to exemplify how XState is
          implemented
        </p>
        <pre>
          <code className="language-javascript">
            {`

              import React from 'react';
              import { Machine, interpret } from 'xstate';
              
              const toggleMachine = Machine({
                id: 'toggle',
                initial: 'inactive',
                states: {
                  inactive: {
                    on: { TOGGLE: 'active' }
                  },
                  active: {
                    on: { TOGGLE: 'inactive' }
                  }
                }
              });
              
              class Toggle extends React.Component {
                state = {
                  current: toggleMachine.initialState
                };
              
                service = interpret(toggleMachine).onTransition(current =>
                  this.setState({ current })
                );
              
                componentDidMount() {
                  this.service.start();
                }
              
                componentWillUnmount() {
                  this.service.stop();
                }
              
                render() {
                  const { current } = this.state;
                  const { send } = this.service;
              
                  return (
                    <button onClick={() => send('TOGGLE')}>
                      {current.matches('inactive') ? 'Off' : 'On'}
                    </button>
                  );
                }
              }
            `}
          </code>
        </pre>
      </article>
      <article className="">
        <p className="f4 fw6 lh-copy  measure-wide">Usage with React Hooks</p>
        <p className="f4 lh-copy  measure-wide">
          Using <a href="https://reactjs.org/hooks">React hooks</a> makes it
          easier to use state machines with function components.
        </p>
        <pre>
          <code className="language-javascript">
            {`

              import { useState, useMemo, useEffect } from 'react';
              import { interpret } from 'xstate';

              export function useMachine(machine) {
                // Keep track of the current machine state
                const [current, setCurrent] = useState(machine.initialState);

                // Start the service (only once!)
                const service = useMemo(
                  () =>
                    interpret(machine)
                      .onTransition(state => {
                        // Update the current machine state when a transition occurs
                        if (state.changed) {
                          setCurrent(state);
                        }
                      })
                      .start(),
                  []
                );

                // Stop the service when the component unmounts
                useEffect(() => {
                  return () => service.stop();
                }, []);

                return [current, service.send];
              }
            `}
          </code>
        </pre>
        <p className="f4 lh-copy  measure-wide">
          Then the above toggle, as a functional component, becomes:
        </p>
        <pre>
          <code className="language-javascript">
            {`
                import { useMachine } from '../path/to/useMachine';

                const toggleMachine = Machine(/* same as defined in first example */);
                
                function Toggle() {
                  const [current, send] = useMachine(toggleMachine);
                  return (
                    <button onClick={() => send('TOGGLE')}>
                      {current.matches('inactive') ? 'Off' : 'On'}
                    </button>
                  );
                }
                `}
          </code>
        </pre>
      </article>
    </section>
  </main>
)

export default DocsContents
