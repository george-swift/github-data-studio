import LimitStyles from './styles/LimitStyles'

type RateProps = {
  rateLimit: {
    limit: number
    remaining: number
  }
}

const RateLimit = ({ rateLimit }: RateProps) => (
  <LimitStyles>
    {rateLimit && (
      <div className="rate">
        <p className="rate__limit">
          {`${rateLimit.remaining} / ${rateLimit.limit}`}
        </p>
        <p className="rate__info">Requests Left</p>
      </div>
    )}
  </LimitStyles>
)

export default RateLimit
