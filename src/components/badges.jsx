import { firstLetterUpperCase } from '../lib/utilities';

function Badges({ badges }) {
    return (
        <div>
            {badges.length > 0 &&
                badges.map((badge) => {
                    return (
                        <span key={badge} className="badge fs-6 border-gray border text-gray rounded-pill p-2 m-1">
                            {firstLetterUpperCase(badge)}
                        </span>
                    );
                })}
        </div>
    );
}

export default Badges;
