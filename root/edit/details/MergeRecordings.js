/*
 * @flow
 * Copyright (C) 2020 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import React from 'react';

import RecordingList from '../../components/list/RecordingList';

type MergeRecordingsEditT = {
  ...EditT,
  +display_data: {
    +large_spread: boolean,
    +new: RecordingT,
    +old: $ReadOnlyArray<RecordingT>,
  },
};

const MergeRecordings = ({edit}: {+edit: MergeRecordingsEditT}) => (
  <table className="details merge-recordings">
    <tr>
      <th>{l('Merge:')}</th>
      <td>
        <RecordingList
          lengthClass={edit.display_data.large_spread ? 'warn-lengths' : ''}
          recordings={edit.display_data.old}
          showExpandedArtistCredits
        />
      </td>
    </tr>
    <tr>
      <th>{l('Into:')}</th>
      <td>
        <RecordingList
          lengthClass={edit.display_data.large_spread ? 'warn-lengths' : ''}
          recordings={[edit.display_data.new]}
          showExpandedArtistCredits
        />
      </td>
    </tr>
  </table>
);

export default MergeRecordings;