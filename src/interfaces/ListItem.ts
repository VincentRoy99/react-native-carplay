/**
 * A list item that appears in a list template.
 */
export interface ListItem {
  /**
   * The primary text displayed in the list item cell.
   */
  text: string;
  /**
   * Extra text displayed below the primary text in the list item cell.
   */
  detailText?: string;
  /**
   * The image displayed on the leading edge of the list item cell.
   */
  image?: null;
   /**
   * The image from file system displayed on the leading edge of the list item cell.
   */
  imgUrl?: null;
  /**
   * Extra text displayed on the trailing portion of the list item, left of the disclosure indicator.
   */
  trailingText?: string;
  /**
   * A Boolean value indicating whether the list item is of type CPMessageListItem or CPListItem.
   */
  isMessageListItem: boolean;
  /**
   * A Boolean value indicating whether the list item cell shows a disclosure indicator on the trailing edge of the list item cell.
   */
  showsDisclosureIndicator?: boolean;
  /**
   * Is Playing flag.
   */
  isPlaying?: boolean;
}
