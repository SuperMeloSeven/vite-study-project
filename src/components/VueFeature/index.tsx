import Props from './components/Props'
import Refs from './components/Ref'
import VFor from './components/VFor'
import VIf from './components/VIf'
import Computed from './components/Computed'
import Watch from './components/Watch'

export default function VueFeature() {
  return (
    <div>
      <Props/>
      <Refs/>
      <VFor/>
      <VIf/>
      <Computed/>
      <Watch/>
    </div>
  )
}