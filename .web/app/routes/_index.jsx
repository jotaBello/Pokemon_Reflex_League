import {Fragment,useCallback,useContext,useEffect} from "react"
import {Button as RadixThemesButton,Container as RadixThemesContainer,Flex as RadixThemesFlex,Heading as RadixThemesHeading,IconButton as RadixThemesIconButton,Text as RadixThemesText} from "@radix-ui/themes"
import {ColorModeContext,EventLoopContext} from "$/utils/context"
import {ReflexEvent,isTrue} from "$/utils/state"
import {Moon as LucideMoon,Sun as LucideSun} from "lucide-react"
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


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesContainer,{css:({ ["padding"] : "16px" }),size:"3"},jsx(Iconbutton_3bedd826d25a324edade2a6a1f71ed90,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["minHeight"] : "20vh" }),direction:"column",justify:"start",gap:"5"},jsx(RadixThemesHeading,{size:"9"},"POKEMON REFLEX LEAGUE"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "18px", ["color"] : "#555" })},"Login \u2022 Battle \u2022 Become Champion")),jsx(RadixThemesButton,{},"Start Tournament"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["color"] : "#777", ["marginTop"] : "16px" })},"Organize Pok\u00e9mon tournaments with your friends in seconds")),jsx("title",{},"PokemonReflexLeague | Index"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}