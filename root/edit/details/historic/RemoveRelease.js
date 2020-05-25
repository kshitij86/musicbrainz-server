/*
 * @flow
 * Copyright (C) 2020 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import * as React from 'react';

import HistoricReleaseList
  from '../../components/HistoricReleaseList';
import ArtistCreditLink
  from '../../../static/scripts/common/components/ArtistCreditLink';

type RemoveReleaseEditT = {
  ...EditT,
  +display_data: {
    +artist_credit?: ArtistCreditT,
    +name: string,
    +releases: $ReadOnlyArray<ReleaseT>,
  },
};

type Props = {
  +edit: RemoveReleaseEditT,
};

const RemoveRelease = ({edit}: Props): React.Element<'table'> => {
  const artistCredit = edit.display_data.artist_credit;
  return (
    <table className="details remove-release">
      <HistoricReleaseList releases={edit.display_data.releases} />
      {artistCredit ? (
        <tr>
          <th>{l('Artist:')}</th>
          <td>
            <ArtistCreditLink artistCredit={artistCredit} />
          </td>
        </tr>
      ) : null}
    </table>
  );
};

export default RemoveRelease;
