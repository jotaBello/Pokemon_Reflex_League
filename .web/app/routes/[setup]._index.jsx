import {Fragment,useCallback,useContext,useEffect} from "react"
import {Button as RadixThemesButton,Dialog as RadixThemesDialog,Flex as RadixThemesFlex,IconButton as RadixThemesIconButton,Select as RadixThemesSelect,Table as RadixThemesTable,Text as RadixThemesText,TextField as RadixThemesTextField} from "@radix-ui/themes"
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


function Table__body_d4f31e3b3687f6a5a33ac5836f0e3f0b () {
  const reflex___state____state__pokemon__reflex__league___pages___setup____state = useContext(StateContexts.reflex___state____state__pokemon__reflex__league___pages___setup____state)



  return (
    jsx(RadixThemesTable.Body,{},Array.prototype.map.call(reflex___state____state__pokemon__reflex__league___pages___setup____state.trainer_list_rx_state_ ?? [],((trainer_rx_state_,index_7202bdd62f7b7982e6b85accde20ea46)=>(jsx(RadixThemesTable.Row,{align:"center",css:({ ["&:hover"] : ({ ["background"] : "var(--gray-3)" }) }),key:index_7202bdd62f7b7982e6b85accde20ea46},jsx(RadixThemesTable.Cell,{},trainer_rx_state_?.["name"]),jsx(RadixThemesTable.Cell,{},trainer_rx_state_?.["region"]),jsx(RadixThemesTable.Cell,{},trainer_rx_state_?.["gender"]))))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(Iconbutton_3bedd826d25a324edade2a6a1f71ed90,{},),jsx(RadixThemesDialog.Root,{},jsx(RadixThemesDialog.Trigger,{},jsx(RadixThemesButton,{},jsx(LucidePlus,{size:26},),jsx(RadixThemesText,{as:"p",size:"4"},"Add Trainer"))),jsx(RadixThemesDialog.Content,{css:({ ["maxWidth"] : "450px" })},jsx(RadixThemesDialog.Title,{},"Add New Trainer"),jsx(RadixThemesDialog.Description,{},"Fill the form with the trainer's info"),jsx(Root_79e5e81ef45178bf890b5601e8ced706,{},))),jsx(RadixThemesTable.Root,{css:({ ["width"] : "50%" }),size:"3",variant:"surface"},jsx(RadixThemesTable.Header,{},jsx(RadixThemesTable.Row,{},jsx(RadixThemesTable.ColumnHeaderCell,{},"Name"),jsx(RadixThemesTable.ColumnHeaderCell,{},"Region"),jsx(RadixThemesTable.ColumnHeaderCell,{},"Team"))),jsx(Table__body_d4f31e3b3687f6a5a33ac5836f0e3f0b,{},))),jsx("title",{},"PokemonReflexLeague | Setup"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}