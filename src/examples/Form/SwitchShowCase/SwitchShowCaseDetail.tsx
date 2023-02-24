/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Switch, { ContentSwitchPosition, SwitchSize }
    from "../../../components/Form/Switch/Switch"
import { Paths } from "../../Paths"
import DetailComponentPage, { Title, Description }
    from "../../_Layout/DetailComponentPage/DetailComponentPage"
import switchCodeViewerStrings from "./SwitchCodeViewerStrings"

const SwitchShowCaseDetail = () => {
    const [switchValue, setSwitchValue,] = useState(false)

    const { t, } = useTranslation()
    const { t: t_PageSwitch, } = useTranslation("PageComponentSwitch")

    return <DetailComponentPage>
        <Title
            title={t_PageSwitch("mainSection.title")}
            githubLink={Paths.GithubComponents.Switch}
        >
            {t_PageSwitch("mainSection.description")}
        </Title>
        <Description title={t_PageSwitch("stateSection.title")}
            description={t_PageSwitch("stateSection.description")}
            componentList={[
                {
                    name: t("common.off"),
                    component: <Switch
                        value={false}
                        onChange={() => { }}
                    />,
                },
                {
                    name: t("common.on"),
                    component: <Switch
                        value={true}
                        onChange={(value) => setSwitchValue(value)}
                    />,
                },
                {
                    name: t("common.disabled"),
                    component: <Switch
                        value={false}
                        onChange={() => { }}
                        disabled
                    />,
                },
            ]}
        >
            {switchCodeViewerStrings.state({
                off: t("common.off"),
                on: t("common.on"),
                disabled: t("common.disabled"),
            })}
        </Description>
        <Description title={t_PageSwitch("variantSection.title")}
            description={t_PageSwitch("variantSection.description")}
            componentList={[
                {
                    name: t("common.single"),
                    component: <Switch
                        value={switchValue}
                        onChange={(value) => setSwitchValue(value)}
                    />,
                },
                {
                    name: t_PageSwitch("left"),
                    component: <Switch
                        value={switchValue}
                        onChange={(value) => setSwitchValue(value)}
                    >
                        {t_PageSwitch("label")}
                    </Switch>,
                },
                {
                    name: t_PageSwitch("right"),
                    component: <Switch
                        value={switchValue}
                        onChange={(value) => setSwitchValue(value)}
                        customStyles={{
                            contentPosition: ContentSwitchPosition.Left,
                        }}
                    >
                        {t_PageSwitch("label")}
                    </Switch>,
                },
                {
                    name: t_PageSwitch("bottom"),
                    component: <Switch
                        value={switchValue}
                        onChange={(value) => setSwitchValue(value)}
                        customStyles={{
                            contentPosition: ContentSwitchPosition.Bottom,
                        }}
                    >
                        {t_PageSwitch("label")}
                    </Switch>,
                },
            ]}
        >
            {switchCodeViewerStrings.variants({ switchText: t_PageSwitch("label"), })}
        </Description>
        <Description title={t_PageSwitch("sizeSection.title")}
            componentList={[
                {
                    name: t_PageSwitch("small"),
                    component: <Switch
                        value={switchValue}
                        onChange={(value) => setSwitchValue(value)}
                        customStyles={{
                            size: SwitchSize.Small,
                            textSize: "xs",
                        }}
                    >
                        {t_PageSwitch("label")}
                    </Switch>,
                },
                {
                    name: t_PageSwitch("base"),
                    component: <Switch
                        value={switchValue}
                        onChange={(value) => setSwitchValue(value)}
                    >
                        {t_PageSwitch("label")}
                    </Switch>,
                },
                {
                    name: t_PageSwitch("large"),
                    component: <Switch
                        value={switchValue}
                        onChange={(value) => setSwitchValue(value)}
                        customStyles={{
                            size: SwitchSize.Large,
                            textSize: "xl",
                        }}
                    >
                        {t_PageSwitch("label")}
                    </Switch>,
                },
            ]}
        >
            {switchCodeViewerStrings.sizes({ switchText: t_PageSwitch("label"), })}
        </Description>
    </DetailComponentPage>
}

export default SwitchShowCaseDetail