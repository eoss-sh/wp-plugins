/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n'

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor'
import { useSelect } from '@wordpress/data'
import { store as coreDataStore } from '@wordpress/core-data'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const posts = useSelect((select) => {
		const { getEntityRecords } = select(coreDataStore)
		return getEntityRecords('postType', 'cpt_search')
	}, [])
	setAttributes({ posts })
	console.log(attributes)
	return (
		<ul {...useBlockProps()}>
			{posts?.map((item) => (
				<li key={item.id}>{item.title.rendered}</li>
			))}
		</ul>
	)
}
