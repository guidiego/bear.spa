import { BabbelThemeProvider, BabbelFonts, NavBarWrapper, Layout, Title, ShortText } from "@lessonnine/design-system.lib";
import { ArchetypeSelection } from "./features/ArchetypeSelection";


function App() {
  return (
    <BabbelThemeProvider>
      <BabbelFonts />
      <NavBarWrapper showLogo />
      <Layout direction="stack" align="center" alignItems="center" gap={16} padding={24}>
        <Title>
          How do you learn?
        </Title>
        <Layout padding={[0, 0, 8]}>
          <ShortText size="large">
            Choose what looks more like you:
          </ShortText>
        </Layout>
        <ArchetypeSelection />
      </Layout>
    </BabbelThemeProvider>
  )
}

export default App
