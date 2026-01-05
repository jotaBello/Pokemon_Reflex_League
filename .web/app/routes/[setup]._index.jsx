import {Fragment,useCallback,useContext,useEffect} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Container as RadixThemesContainer,Dialog as RadixThemesDialog,Flex as RadixThemesFlex,Grid as RadixThemesGrid,Heading as RadixThemesHeading,IconButton as RadixThemesIconButton,Select as RadixThemesSelect,Table as RadixThemesTable,Text as RadixThemesText,TextField as RadixThemesTextField} from "@radix-ui/themes"
import {ColorModeContext,EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,getRefValue,getRefValues,isTrue} from "$/utils/state"
import {Moon as LucideMoon,Plus as LucidePlus,Sun as LucideSun} from "lucide-react"
import {Root as RadixFormRoot} from "@radix-ui/react-form"
import {jsx} from "@emotion/react"




function Fragment_4eccfd74653df2c248da64de2d1cc715 () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    jsx(Fragment,{},((resolvedColorMode?.valueOf?.() === "light"?.valueOf?.())?(jsx(Fragment,{},jsx(LucideSun,{},))):(jsx(Fragment,{},jsx(LucideMoon,{},)))))
  )
}


function Iconbutton_3bedd826d25a324edade2a6a1f71ed90 () {
  const { toggleColorMode } = useContext(ColorModeContext)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, ReflexEvent, toggleColorMode])

  return (
    jsx(RadixThemesIconButton,{css:({ ["padding"] : "6px", ["position"] : "fixed", ["top"] : "2rem", ["right"] : "2rem", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) }),onClick:on_click_9922dd3e837b9e087c86a2522c2c93f8},jsx(Fragment_4eccfd74653df2c248da64de2d1cc715,{},))
  )
}


function Root_79e5e81ef45178bf890b5601e8ced706 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

    const handleSubmit_1b945349513cb59148ae2badbf32f3e6 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.pokemon__reflex__league___pages___setup____state.add_trainer", ({ ["trainer"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


  return (
    jsx(RadixFormRoot,{className:"Root ",css:({ ["width"] : "100%" }),onSubmit:handleSubmit_1b945349513cb59148ae2badbf32f3e6},jsx(RadixThemesFlex,{direction:"column",gap:"4"},jsx(RadixThemesTextField.Root,{name:"name",placeholder:"Trainer Name",required:true},),jsx(RadixThemesTextField.Root,{name:"region",placeholder:"Trainer Region"},),jsx(RadixThemesSelect.Root,{name:"gender"},jsx(RadixThemesSelect.Trigger,{placeholder:"Gender"},),jsx(RadixThemesSelect.Content,{},jsx(RadixThemesSelect.Group,{},"",jsx(RadixThemesSelect.Item,{value:"Male"},"Male"),jsx(RadixThemesSelect.Item,{value:"Female"},"Female")))),jsx(RadixThemesFlex,{justify:"end",gap:"3"},jsx(RadixThemesDialog.Close,{},jsx(RadixThemesButton,{color:"gray",variant:"soft"},"Cancel")),jsx(RadixThemesDialog.Close,{},jsx(RadixThemesButton,{type:"submit"},"Submit")))))
  )
}


function Table__body_2ed704caa873b6e629fafb697e49ec45 () {
  const reflex___state____state__pokemon__reflex__league___pages___setup____state = useContext(StateContexts.reflex___state____state__pokemon__reflex__league___pages___setup____state)
const [addEvents, connectErrors] = useContext(EventLoopContext);
const reflex___state____state__pokemon__reflex__league___components___add_team_button____state = useContext(StateContexts.reflex___state____state__pokemon__reflex__league___components___add_team_button____state)

    const handleSubmit_40d19cebddd2fed3c13e53197f1d9ffb = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => null), ["callback"] : null }), ({ ["preventDefault"] : true })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


  return (
    jsx(RadixThemesTable.Body,{},Array.prototype.map.call(reflex___state____state__pokemon__reflex__league___pages___setup____state.trainer_list_rx_state_ ?? [],((trainer_rx_state_,index_050fae47e8e34d83b1d76fec3c48d416)=>(jsx(RadixThemesTable.Row,{align:"center",css:({ ["&:hover"] : ({ ["background"] : "var(--gray-3)" }) }),key:index_050fae47e8e34d83b1d76fec3c48d416},jsx(RadixThemesTable.Cell,{},trainer_rx_state_?.["name"]),jsx(RadixThemesTable.Cell,{},trainer_rx_state_?.["region"]),jsx(RadixThemesTable.Cell,{},trainer_rx_state_?.["gender"]),jsx(RadixThemesTable.Cell,{},jsx(RadixThemesDialog.Root,{},jsx(RadixThemesDialog.Trigger,{},jsx(RadixThemesFlex,{},jsx(RadixThemesButton,{onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.pokemon__reflex__league___components___add_team_button____state.load_pokemons", ({  }), ({  })))], [_e], ({  }))))},"Add team"))),jsx(RadixThemesDialog.Content,{},jsx(RadixThemesDialog.Title,{},"Add your team"),jsx(RadixThemesDialog.Description,{},"Select your pokemons"),jsx(RadixFormRoot,{className:"Root ",css:({ ["width"] : "100%" }),onSubmit:handleSubmit_40d19cebddd2fed3c13e53197f1d9ffb},jsx(RadixThemesFlex,{direction:"column",gap:"4"},jsx(RadixThemesTextField.Root,{},),jsx(RadixThemesGrid,{columns:"4",gap:"1"},Array.prototype.map.call(reflex___state____state__pokemon__reflex__league___components___add_team_button____state.pokemons_rx_state_ ?? [],((pokemon_rx_state_,index_96c147cb5aaf78a5c5b8274bf9b901a8)=>(jsx(RadixThemesBox,{css:({ ["border"] : "2px solid", ["borderColor"] : (reflex___state____state__pokemon__reflex__league___components___add_team_button____state.selected_set_rx_state_.includes(pokemon_rx_state_?.["id"]) ? "#00ff08" : "#ffffff"), ["borderRadius"] : "12px", ["padding"] : "2", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),key:index_96c147cb5aaf78a5c5b8274bf9b901a8,onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.pokemon__reflex__league___components___add_team_button____state.toggle_pokemon", ({ ["id"] : pokemon_rx_state_?.["id"] }), ({  })))], [_e], ({  }))))},jsx(RadixThemesText,{align:"center",as:"p"},pokemon_rx_state_?.["id"]),jsx("img",{css:({ ["width"] : "128px", ["height"] : "128px" }),src:pokemon_rx_state_?.["img"]},),jsx(RadixThemesText,{align:"center",as:"p",css:({ ["fontSize"] : "18px" })},pokemon_rx_state_?.["name"])))))))),jsx(RadixThemesFlex,{justify:"end",gap:"3"},jsx(RadixThemesDialog.Close,{},jsx(RadixThemesButton,{color:"gray",variant:"soft"},"Cancel")),jsx(RadixThemesDialog.Close,{},jsx(RadixThemesButton,{type:"submit"},"Submit")))))))))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesContainer,{css:({ ["padding"] : "16px" }),size:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(Iconbutton_3bedd826d25a324edade2a6a1f71ed90,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["minHeight"] : "20vh" }),direction:"column",justify:"start",gap:"5"},jsx(RadixThemesHeading,{size:"9"},"SETUP A TOURNAMENT")),jsx(RadixThemesDialog.Root,{},jsx(RadixThemesDialog.Trigger,{},jsx(RadixThemesButton,{},jsx(LucidePlus,{size:26},),jsx(RadixThemesText,{as:"p",size:"4"},"Add Trainer"))),jsx(RadixThemesDialog.Content,{css:({ ["maxWidth"] : "450px" })},jsx(RadixThemesDialog.Title,{},"Add New Trainer"),jsx(RadixThemesDialog.Description,{},"Fill the form with the trainer's info"),jsx(Root_79e5e81ef45178bf890b5601e8ced706,{},))),jsx(RadixThemesTable.Root,{css:({ ["width"] : "75%" }),size:"3",variant:"surface"},jsx(RadixThemesTable.Header,{},jsx(RadixThemesTable.Row,{},jsx(RadixThemesTable.ColumnHeaderCell,{},"Name"),jsx(RadixThemesTable.ColumnHeaderCell,{},"Region"),jsx(RadixThemesTable.ColumnHeaderCell,{},"Gender"),jsx(RadixThemesTable.ColumnHeaderCell,{},"Team"))),jsx(Table__body_2ed704caa873b6e629fafb697e49ec45,{},)))),jsx("title",{},"PokemonReflexLeague | Setup"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}