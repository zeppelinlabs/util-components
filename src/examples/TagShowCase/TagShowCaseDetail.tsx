/* eslint-disable max-lines-per-function */
import React from "react"
import Tag, { TagSize, TagIconPosition, TagVariant } from "../../components/Tag/Tag"
import { ReactComponent as CircleIcon } from ".././../assets/icons/circle.svg"
import DetailComponentPage, { Title, Description }
    from "../_Layout/DetailComponentPage/DetailComponentPage"
import { toastNotification } from "../../util/toastNotification"
import { useTranslation } from "react-i18next"

const TagShowCaseDetail = () => {
    const { t, } = useTranslation()
    const { t: t_PageTags, } = useTranslation("PageComponentTag")

    const handleOnClick = () => toastNotification("Fantastic! A button click remove has occurred!")

    return <DetailComponentPage>
        <Title title={t_PageTags("mainSection.title")}>
            {t_PageTags("mainSection.description")}
        </Title>

        <Description title={t_PageTags("typeSection.title")}
            description={t_PageTags("typeSection.description")}
            componentList={[
                {
                    name: t("common.primary"),
                    component: <Tag>
                        {t_PageTags("tagText")}
                    </Tag>,
                },
                {
                    name: t("common.secondary"),
                    component: <Tag customStyles={{ variant: TagVariant.Secondary, }}>
                        {t_PageTags("tagText")}
                    </Tag>,
                },
            ]}
        >{`import Tag, { TagVariant } from "components/Tag/Tag"

<Tag>
    ${t("common.primary")}
</Tag>

<Tag customStyles={{ variant: TagVariant.Secondary, }}>
    ${t("common.secondary")}
</Tag>`
            }</Description>
        <Description title={t_PageTags("stateSection.title")}
            description={t_PageTags("stateSection.description")}
            componentList={[
                {
                    name: t("common.standard"),
                    component: <Tag onClickRemove={handleOnClick}>
                        {t_PageTags("tagText")}
                    </Tag>,
                },
                {
                    name: t("common.disabled"),
                    component: <Tag onClickRemove={handleOnClick} isDisabled>
                        {t_PageTags("tagText")}
                    </Tag>,
                },
            ]}
        >{`import Tag from "components/Tag/Tag"

<Tag onClickRemove={handleOnClick}>
    ${t("common.standard")}
</Tag>

<Tag onClickRemove={handleOnClick} isDisabled>
    ${t("common.disabled")}
</Tag>`
            }</Description>
        <Description title={t_PageTags("variantSection.title")}
            description={t_PageTags("variantSection.description")}
            componentList={[
                {
                    name: t("common.onlyText"),
                    component: <Tag>
                        {t_PageTags("tagText")}
                    </Tag>,
                },
                {
                    name: t_PageTags("withIcon"),
                    component: <Tag icon={{
                        SVGComponent: CircleIcon,
                    }}>
                        {t_PageTags("tagText")}
                    </Tag>,
                },
                {
                    name: t_PageTags("withIconRight"),
                    component: <Tag icon={{
                        SVGComponent: CircleIcon,
                        position: TagIconPosition.Right,
                    }}>
                        {t_PageTags("tagText")}
                    </Tag>,
                },
                {
                    name: t_PageTags("withClose"),
                    component: <Tag onClickRemove={handleOnClick}>
                        {t_PageTags("tagText")}
                    </Tag>,
                },
                {
                    name: t_PageTags("withIconAndClose"),
                    component: <Tag onClickRemove={handleOnClick}
                        icon={{
                            SVGComponent: CircleIcon,
                        }}>
                        {t_PageTags("tagText")}
                    </Tag>,
                },
            ]}
        >{`import Tag, { TagIconPosition, } from "components/Tag/Tag"
import { ReactComponent as CircleIcon } from "assets/icons/circle.svg"

<Tag>
    ${t("common.onlyText")}
</Tag>

<Tag icon={{SVGCircleIcon,}}>
    ${t_PageTags("withIcon")}
</Tag>

<Tag icon={{
    SVGCircleIcon,
    position:TagIconPosition.Right,
}}>
    ${t_PageTags("withIconRight")}
</Tag>

<Tag onClickRemove={handleOnClick}>
    ${t_PageTags("withClose")}
</Tag>

<Tag onClickRemove={handleOnClick}
    icon={{SVGCircleIcon,}}>
    ${t_PageTags("withIconAndClose")}
</Tag>`
            }</Description>
        <Description title={t_PageTags("sizeSection.title")}
            componentList={[
                {
                    name: t_PageTags("sizeSmall"),
                    component: <Tag onClickRemove={handleOnClick}
                        customStyles={{ size: TagSize.Small, }}
                        icon={{
                            SVGComponent: CircleIcon,
                        }}>
                        {t_PageTags("tagText")}
                    </Tag>,
                },
                {
                    name: t_PageTags("sizeBase"),
                    component: <Tag onClickRemove={handleOnClick}
                        customStyles={{ size: TagSize.Base, }}
                        icon={{
                            SVGComponent: CircleIcon,
                        }}>
                        {t_PageTags("tagText")}
                    </Tag>,
                },
                {
                    name: t_PageTags("sizeLarge"),
                    component: <Tag onClickRemove={handleOnClick}
                        customStyles={{ size: TagSize.Large, }}
                        icon={{
                            SVGComponent: CircleIcon,
                        }}>
                        {t_PageTags("tagText")}
                    </Tag>,
                },
            ]}
        >{`import Tag, { TagSize, } from "components/Tag/Tag"

<Tag onClickRemove={handleOnClick}
    customStyles={{ size: TagSize.Small, }}
    icon={{SVGComponent: CircleIcon,}}>
    ${t_PageTags("sizeSmall")}
</Tag>

<Tag onClickRemove={handleOnClick}
    customStyles={{ size: TagSize.Base, }}
    icon={{SVGComponent: CircleIcon,}}>
    ${t_PageTags("sizeBase")}
</Tag>

<Tag onClickRemove={handleOnClick}
    customStyles={{ size: TagSize.Large, }}
    icon={{SVGComponent: CircleIcon,}}>
    ${t_PageTags("sizeLarge")}
</Tag>`
            }</Description>
    </DetailComponentPage>
}

export default TagShowCaseDetail